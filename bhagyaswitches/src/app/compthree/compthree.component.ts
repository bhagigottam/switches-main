import { Component, OnInit } from '@angular/core';
import { NewService } from '../new.service';

@Component({
  selector: 'app-compthree',
  templateUrl: './compthree.component.html',
  styleUrls: ['./compthree.component.scss']
})
export class CompthreeComponent implements OnInit {

  constructor(private service:NewService) { }

  ngOnInit(): void {
    this.service.subj.subscribe((data:any)=>{
      console.log(data);
      if(data.comp=='compone'){
        this.cont.iscompone=data.value
      }
      if(data.comp=='comptwo'){
        this.cont.iscomptwo=data.value
      }

      
    })


  }
  cont ={iscompone:false,iscomptwo:false}
  toggleone(){
this.service.subj.next({comp:"compone",value:!this.cont.iscompone})
  }
  toggletwo(){
this.service.subj.next({comp:"comptwo",value:!this.cont.iscomptwo})
  }

}
