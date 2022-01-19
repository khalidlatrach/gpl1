import { Component, OnInit } from '@angular/core';
import { PlService } from 'src/app/services/pl.service';

@Component({
  selector: 'app-pl-list',
  templateUrl: './pl-list.component.html',
  styleUrls: ['./pl-list.component.css']
})
export class PlListComponent implements OnInit {
 pls :any[]=[];
  constructor(private plService:PlService) { 
    this.pls= this.plService.pl;
  }

  ngOnInit(): void {

  }

}
