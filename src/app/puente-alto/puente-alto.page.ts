
import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-puente-alto',
  templateUrl: './puente-alto.page.html',
  styleUrls: ['./puente-alto.page.scss'],
})
export class PuenteAltoPage implements OnInit {
  @ViewChild('mappp') mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;
  center: any ={
    lat: -33.5985117,
    lng:-70.5793588,
  }


  markerId: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.createMapp();
  }

  async createMapp(){
    this.newMap = await GoogleMap.create({
      id: 'capacitor-google-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.google_maps_api_key,
      config:{
        center: this.center,
        zoom:16,
      },
    })

    this.addMarkerrr(this.center.lat, this.center.lng);
  

}

async addMarkerrr(lat,lng){
  this.markerId= await this.newMap.addMarker({
    coordinate:{
      lat:lat,
      lng:lng,
    },
    draggable:true
  });
}

}
