import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 title:string = "Sea Beach Resort"
 clogo:string = "assets/restlogo.jpg"
 h:number =125
 w:number = 150

 setTheme(theme:string){
  if (theme=="S"){
    this.title = "Sea Beach Resort : Summer Theme"
    this.clogo="assets/summer.jpg"
  }
  else if(theme=="W"){
    this.title = "Sea Beach Resort : Winter Theme"
    this.clogo="assets/winter.jpg"
  }
 }
}

 
