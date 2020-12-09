import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RecipesService } from '../service/recipes.service';
import {Recipe} from "../models/recipe";

@Component({
  selector: 'app-random-recipe',
  templateUrl: './random-recipe.component.html',
  styleUrls: ['./random-recipe.component.css']
})
export class RandomRecipeComponent implements OnInit {
recipes = [];
  constructor(  private recipeService: RecipesService) { }

  ngOnInit() {
    this.getRandomRecipe();

  }
  getRandomRecipe(){
    this.recipeService.generateRandomRecipe().subscribe(
      data => {
        console.log(data);
        this.recipes = data;
      }
    )
   }


}
