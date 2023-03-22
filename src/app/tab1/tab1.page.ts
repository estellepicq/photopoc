import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Camera, CameraResultType } from '@capacitor/camera';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  imageUrl: SafeUrl | undefined = undefined;

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath || '';
    
  
    // Can be set to the src of an image now
    this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

}
