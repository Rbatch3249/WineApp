import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redwine3',
  templateUrl: './redwine3.component.html',
  styleUrls: ['./redwine3.component.css']
})
export class Redwine3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToWineListPage(){
    this.router.navigate(['/wines']);
  }

}
