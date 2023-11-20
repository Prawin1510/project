import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
cname : string = "Guest"
table : number = 0
isExisting: boolean = false
mnumber:number = 0
}
