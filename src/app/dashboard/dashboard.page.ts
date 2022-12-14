import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import jsQR from 'jsqr';
import { LoadingController, ToastController } from '@ionic/angular';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  scanActive = false;
  scanResult = "";

  @ViewChild('video',{static:false})video:ElementRef;
  @ViewChild('canvas',{static:false})canvas:ElementRef;

  constructor(
    private loginService : LoginService,
    private router : Router,
    private toastctrl:ToastController,
    private loadingctrl:LoadingController
  
  ) { }

  ngOnInit() {}


  videoElement : any;
  canvasElement : any;
  canvasContext : any;
  loading : HTMLIonLoadingElement;


  ngAfterViewInit(){
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d')
  }


  async startScan(){
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {facingMode: 'environment'}
    });
    this.videoElement.srcObject = stream;
    this.videoElement.setAttribute('playsinline', true);
    this.videoElement.play();

    this.loading = await this.loadingctrl.create({})
    await this.loading.present()
    requestAnimationFrame(this.scan.bind(this));
  }

  async scan(){
    console.log("SCAN");
    
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA){
      if (this.loading){
        await this.loading.dismiss();
        this.loading! = null!;
        this.scanActive = true;
      }
      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height,
        
      );

      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height,
      );

      const code = jsQR(imageData.data, imageData.width, imageData.height,{
        inversionAttempts: 'dontInvert'
      });
      console.log('code: ', code);
      
      if(code){
        this.scanActive = false;
        this.scanResult = code.data;
        this.showQrToast();

      }else{
        if(this.scanActive){
          requestAnimationFrame(this.scan.bind(this));
        }
      }

    }else {
      requestAnimationFrame(this.scan.bind(this));
    }

  }
  

  stopScan(){
    this.scanActive = false;
  }


  reset(){
    this.scanResult = null!;
  }

 async showQrToast() {
  const toast = await this.toastctrl.create({
    message:`Abrir ${this.scanResult}?`,
    position: 'top',
    buttons:[{
      text: 'Abrir',
      handler: () =>{
        window.open(this.scanResult, '_system', 'location=yes');
      }
    }
  ]
  });
  toast.present();
  
 }

  
  onClick(){
    this.loginService.logout()
      .then( () =>{
        this.router.navigate(['/home']);
    })
    .catch(error => console.log(error))
  }

}