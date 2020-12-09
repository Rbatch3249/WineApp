import { Component, OnInit } from '@angular/core';
import { EdamamService } from '../service/edamam.service';

@Component({
  selector: 'app-edamam-search',
  templateUrl: './edamam-search.component.html',
  styleUrls: ['./edamam-search.component.css']
})
export class EdamamSearchComponent implements OnInit {

  totalRecords:Number;
  data: any[] = [];
  m: any[] = [];
  page:Number=1;
  show;

  constructor(private edamamService: EdamamService) {
    this.data = new Array<any>()
   }


  ngOnInit(): void {
  }

  // searchRecipe(form) {
  //   this.recipeApiService
  //     .getRecipeData(form.value.userSearch)
  //     .then((response) => {
  //       this.results = response;
  //     })
  //     .catch((error: HttpErrorResponse) => {
  //       console.error(error);
  //       return error;
  //     });
  // }

i=1;
  searchRecipe(form){
    
    this.edamamService.getRecipeData(form.value.userSearch, this.selectedDiet)
    .subscribe((data)=>{
      this.data = data.hits;
      this.totalRecords = data.hits.length; 
      this.show = data.more;
      console.log(data.hits[0].recipe);
      error => console.log('error occurred', error);
    })
    
  }

  // this variable sets the user's selectedDiet choice to an empty string
  selectedDiet: string = '';

  // this method takes in the the user's input for the selectedDiet and reassigns the variable to that value
  selectDiet (event: any) {
    this.selectedDiet = event.target.value;
    console.log(this.selectedDiet);
  }

}


