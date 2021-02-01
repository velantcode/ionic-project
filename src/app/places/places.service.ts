import { Injectable } from '@angular/core';
import PlaceModel from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: PlaceModel[] = [
    {
      id: '1',
      title: 'Torre Eiffel',
      imageUrl: 'https://www.ngenespanol.com/wp-content/uploads/2018/08/Fotografiar-la-Torre-Eiffel-de-noche-est%C3%A1-prohibido.jpg',
      comments: [
        'Is beautiful',
        'Is so cute',
        'I love it'
      ]
    },
    {
      id: '2',
      title: 'Estatua de la Libertad',
      imageUrl: 'https://farm7.static.flickr.com/6237/6282121179_b50e6ddbbf_z.jpg',
      comments: []
    },
    {
      id: '3',
      title: 'Salto Ángel',
      imageUrl: 'https://www.hola.com/imagenes/viajes/20200518168096/salto-del-angel-parque-nacional-de-canaima-venezuela-la-catarata-mas-alta-del-mundo/0-824-367/salto-del-angel-venezuela-canaima-a.jpg?filter=ds75',
      comments: [
        'The view is very beautiful',
        'This park is amazing'
      ]
    },
  ]

  constructor() { }

  getPlaces() : PlaceModel[]{
    return [...this.places];
  }

  showPlace(placeId: string) : PlaceModel {
    return this.places.find(place => place.id === placeId) || null;
  }

  addPlace(title: string, imageUrl: string) {
    this.places.push({
      id: `${this.places.length + 1}`,
      title,
      imageUrl,
      comments: []
    })
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => place.id !== placeId)
  }
}
