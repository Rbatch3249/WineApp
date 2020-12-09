import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-whitewine2',
  templateUrl: './whitewine2.component.html',
  styleUrls: ['./whitewine2.component.css']
})
export class Whitewine2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToWineListPage(){
    this.router.navigate(['/wines']);
  }

}
