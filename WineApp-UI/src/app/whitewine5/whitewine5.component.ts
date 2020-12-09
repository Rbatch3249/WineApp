import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-whitewine5',
  templateUrl: './whitewine5.component.html',
  styleUrls: ['./whitewine5.component.css']
})
export class Whitewine5Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToWineListPage(){
    this.router.navigate(['/wines']);
  }

}
