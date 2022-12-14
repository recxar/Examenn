import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vespucip',
  templateUrl: './vespucip.page.html',
  styleUrls: ['./vespucip.page.scss'],
})
export class VespucipPage implements OnInit {

  @ViewChild('map') mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;
  center: any ={
    lat: -33.5160139,
    lng:-70.5984443,
  }


  markerId: string;

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.createMap();
  }

async createMap(){
  this.newMap = await GoogleMap.create({
    id: 'capacitor-google-map',
    element: this.mapRef.nativeElement,
    apiKey: environment.google_maps_api_key,
    config:{
      center: this.center,
      zoom:13,
    },

    





  });
  this.addMarker(this.center.lat, this.center.lng);


}

async addMarker(lat,lng){
  this.markerId= await this.newMap.addMarker({
    coordinate:{
      lat:lat,
      lng:lng,
    },
    draggable:true
  });
}
}
