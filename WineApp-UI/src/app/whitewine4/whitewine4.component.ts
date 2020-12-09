import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-whitewine4',
  templateUrl: './whitewine4.component.html',
  styleUrls: ['./whitewine4.component.css']
})
export class Whitewine4Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToWineListPage(){
    this.router.navigate(['/wines']);
  }

}
