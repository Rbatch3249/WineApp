import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WineService } from '../service/wine.service';

@Component({
  selector: 'app-whitewine1',
  templateUrl: './whitewine1.component.html',
  styleUrls: ['./whitewine1.component.css']
})
export class Whitewine1Component implements OnInit {

  constructor(private wineService: WineService, private router: Router) { }

  ngOnInit() {
  }
  goToWineListPage(){
    this.router.navigate(['/wines']);
  }

}
