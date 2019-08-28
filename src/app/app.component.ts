import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beacon-app';
  
  isActive: boolean;
  
  onHide(){
      this.isActive = false;
  }
  
  onShow(){
      this.isActive= true;
  }
}
