import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WineService } from '../service/wine.service';

@Component({
  selector: 'app-redwine1',
  templateUrl: './redwine1.component.html',
  styleUrls: ['./redwine1.component.css']
})
export class Redwine1Component implements OnInit {

  constructor(private wineService: WineService,private router: Router) { }

  ngOnInit() {

  }
  goToWineListPage(){
    this.router.navigate(['/wines']);
  }

}
