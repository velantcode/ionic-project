import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.page.html',
  styleUrls: ['./new-place.page.scss'],
})
export class NewPlacePage implements OnInit {

  constructor(
    private placesServices: PlacesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  savePlace(title: any, imageUrl: any) {
    this.placesServices.addPlace(title.value, imageUrl.value);
    this.router.navigate(['/places']);
  }

}
