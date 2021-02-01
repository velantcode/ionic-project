import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesPage
  },
  {
    path: 'place-details',
    loadChildren: () => import('./place-details/place-details.module').then( m => m.PlaceDetailsPageModule)
  },
  {
    path: 'new-place',
    loadChildren: () => import('./new-place/new-place.module').then( m => m.NewPlacePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
