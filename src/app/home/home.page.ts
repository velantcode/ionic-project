import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  photos = [];

  constructor(private photosService: PhotosService, private loadingController: LoadingController) {}

  async ngOnInit() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Loading, please await ...',
    });

    await loading.present();

    this.photosService.getPhotos().subscribe(async (data: any) => {
      this.photos = data;
      await loading.dismiss();
    });
  }
}
