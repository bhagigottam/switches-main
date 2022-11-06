import { Component, OnInit } from '@angular/core';
import { NewService } from '../new.service';

@Component({
  selector: 'app-comptwo',
  templateUrl: './comptwo.component.html',
  styleUrls: ['./comptwo.component.scss']
})
export class ComptwoComponent implements OnInit {

  constructor(private service:NewService) { }

  ngOnInit(): void {
    this.service.subj.subscribe((dat:any)=>{
      if(dat.comp=='comptwo'){
        this.ison=dat.value
      }
    })
  }
  ison=false;
  toggle2(){
this.service.subj.next({comp:"comptwo",value:!this.ison})
  }
}
