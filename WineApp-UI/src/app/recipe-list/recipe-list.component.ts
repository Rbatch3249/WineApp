import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../service/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

recipe: any[];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    
  }

 

 
}
