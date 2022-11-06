import { Component, OnInit } from '@angular/core';
import { NewService } from '../new.service';

@Component({
  selector: 'app-compone',
  templateUrl: './compone.component.html',
  styleUrls: ['./compone.component.scss']
})
export class ComponeComponent implements OnInit {

  constructor( private service:NewService) { }
ison=false
  ngOnInit(): void {
    this.service.subj.subscribe((k:any)=>{
      console.log(k);
      if(k.comp=='compone'){
        this.ison=k.value
      }
      
    })

  }
  toggle(){
this.service.subj.next({comp:'compone',value:!this.ison})
  }

}
