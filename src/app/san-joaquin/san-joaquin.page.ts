
import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-san-joaquin',
  templateUrl: './san-joaquin.page.html',
  styleUrls: ['./san-joaquin.page.scss'],
})
export class SanJoaquinPage implements OnInit {
  @ViewChild('mapp') mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;
  center: any ={
    lat: -33.5002654,
    lng:-70.6164277,
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

    this.addMarkerr(this.center.lat, this.center.lng);
  

}
async addMarkerr(lat,lng){
  this.markerId= await this.newMap.addMarker({
    coordinate:{
      lat:lat,
      lng:lng,
    },
    draggable:true
  });
}
}
