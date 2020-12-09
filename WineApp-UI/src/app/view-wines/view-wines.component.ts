import { Component, OnInit } from '@angular/core';
import { Wines } from '../models/wine';
import { WineService } from '../service/wine.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-view-wines',
  templateUrl: './view-wines.component.html',
  styleUrls: ['./view-wines.component.css']
})
export class ViewWinesComponent implements OnInit {
wine: Wines[];
filterBy = "";


  constructor(private wineService: WineService) { }

  ngOnInit() {
  this.seeAllWines();
  }


seeAllWines(){//using wineservice to fetch data for all wines
 this.wineService.getAllWines().subscribe(//subscribe to retrieve the data
   response => {
     console.log(response.data);
     this.wine = response.data //store the data inside the wine property
   }
 );
}

searchFilterWines(){

  this.wineService.filterWines(this.filterBy.toLowerCase()).subscribe(
    data => {
      this.wine = data;
      console.log(data);
    }
  )
}
// performFilter(filterBy: string): Wines[]{
//   if(filterBy){
//     filterBy =filterBy.toLocaleLowerCase();
//     return this.wine.filter((wines: Wines)=>
//     wines.varietal.toLocaleLowerCase().indexOf(filterBy) !==-1);
//   }else{
//     return this.wine;
//   }
// }

seeWineDetails(id:number){
  this.wineService.getWinesById(id).subscribe(
    response => {
      console.log(response.data);
      this.wine = response.data
    }
  );
 }
}
