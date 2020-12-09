import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-whitewine3',
  templateUrl: './whitewine3.component.html',
  styleUrls: ['./whitewine3.component.css']
})
export class Whitewine3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToWineListPage(){
    this.router.navigate(['/wines']);
  }

}
