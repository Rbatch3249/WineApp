import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redwine2',
  templateUrl: './redwine2.component.html',
  styleUrls: ['./redwine2.component.css']
})
export class Redwine2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToWineListPage(){
    this.router.navigate(['/wines']);
  }
}
