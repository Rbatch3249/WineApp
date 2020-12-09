import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redwine4',
  templateUrl: './redwine4.component.html',
  styleUrls: ['./redwine4.component.css']
})
export class Redwine4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToWineListPage(){
    this.router.navigate(['/wines']);
  }

}
