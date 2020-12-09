import { Component, OnInit } from '@angular/core';
import {Wines} from "../models/wine";
import {WineService} from "../service/wine.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css']
})
export class WineDetailComponent implements OnInit {
wines: Wines;


  constructor(private wineService: WineService, private activatedRoute:ActivatedRoute, private router: Router) { }

  ngOnInit() {
  const id = this.activatedRoute.snapshot.params[`id`];
  this.getWineById(id);
  }
getWineById(id:number){
    this.wineService.getWinesById(id).subscribe(
      data => {
        this.wines = data.data;

      }
    )
}


}
