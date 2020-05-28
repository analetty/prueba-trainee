import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {

  @Input() componentClass: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.componentClass);
    console.log(this.getColor());
  }

  getColor(){
    if(this.componentClass.length === 4){
      return 'red';
    } else {
      return 'black';
    }
  }

}
