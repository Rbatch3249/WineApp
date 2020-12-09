import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './wine-pairpage.component.html',
  styleUrls: ['./wine-pairpage.component.css']
})
export class WinePairComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToWineListPage(){
    this.router.navigate(['/wines']);
  }
  goToIngredientsPage(){
    this.router.navigate(['/ingredients']);
  }

}
