import { Component } from '@angular/core';


@Component({
  selector: 'mv-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  name = 'The Three Masketeers';

  buttonClicked(){
      console.log("Butona tıklandı");
  }
}
