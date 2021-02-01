import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import PlaceModel from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {

  place: PlaceModel

  constructor(
    private activateRoute: ActivatedRoute,
    private placesServices: PlacesService,
    private router: Router,
    private alertConCtrl: AlertController
  ) 
  { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap=> {
      // redirect
      const placeId = paramMap.get('placeId');
      this.place = this.placesServices.showPlace(placeId);
      console.log('place', this.place);
    })
  }

  async deletePlace() {
    const alertElement = await this.alertConCtrl.create({
      header: 'Are you sure, you want to delete it?',
      message: 'Be careful',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        { 
          text: 'Delete',
          handler: () => {
            this.placesServices.deletePlace(this.place.id);
            this.router.navigate(['/places']);
          }
        },
      ]
    });

    await alertElement.present();
  }

}
