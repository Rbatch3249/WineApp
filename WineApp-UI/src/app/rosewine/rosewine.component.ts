import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rosewine',
  templateUrl: './rosewine.component.html',
  styleUrls: ['./rosewine.component.css']
})
export class RosewineComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToWineListPage(){
    this.router.navigate(['/wines']);
  }
}
