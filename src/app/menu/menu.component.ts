import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
bmenu:string[] = ["Idli","Dosa","Poori","Chole"]
lmenu:string[] = ["Veg-Meals","Non-Veg Meals","Veg Biryani Combo", "Chicken Biryani Combo"]
menu:string[] = [] 

setMenu(ftype:string){
  if (ftype=="B"){
    this.menu = this.bmenu
  }
  else if(ftype=="L")
  {
    this.menu = this.lmenu
  }
}
constructor(){
  this.menu = this.bmenu
}

}
