import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewWinesComponent } from './view-wines/view-wines.component';
import { WinePairComponent } from './Wine-PairPage/wine-pairpage.component';
import { InputRecipeComponent } from './input-recipe/input-recipe.component';
import { Redwine1Component } from './redwine1/redwine1.component';
import { Whitewine1Component } from './whitewine1/whitewine1.component';
import { Whitewine2Component } from './whitewine2/whitewine2.component';
import { Whitewine3Component } from './whitewine3/whitewine3.component';
import { RosewineComponent } from './rosewine/rosewine.component';
import { Whitewine4Component } from './whitewine4/whitewine4.component';
import { Redwine2Component } from './redwine2/redwine2.component';
import { Whitewine5Component } from './whitewine5/whitewine5.component';
import { Redwine3Component } from './redwine3/redwine3.component';
import { Redwine4Component } from './redwine4/redwine4.component';
import { RandomRecipeComponent } from './random-recipe/random-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { EdamamSearchComponent } from './edamam-search/edamam-search.component';
import { HomeComponent } from './home/home.component';
import {WineDetailComponent} from "./wine-detail/wine-detail.component";
import {ContactComponent} from "./contact/contact.component";


const routes: Routes = [
  {path: 'wines',component: ViewWinesComponent},
  {path: 'recipe', component: RandomRecipeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'wines/:id', component: WineDetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'wine', component: WinePairComponent},
  {path: 'ingredients', component: InputRecipeComponent},
  {path: 'redwine1', component: Redwine1Component},
 {path: 'whitewine1', component: Whitewine1Component},
 {path: 'whitewine2', component: Whitewine2Component},
 {path: 'whitewine3', component: Whitewine3Component},
 {path: 'rosewine', component: RosewineComponent},
 {path: 'whitewine4', component: Whitewine4Component},
 {path: 'redwine2', component: Redwine2Component},
 {path: 'whitewine5', component: Whitewine5Component},
 {path: 'redwine3', component: Redwine3Component},
 {path:'redwine4', component: Redwine4Component},
  {path: 'recipelist', component: RecipeListComponent},
  {path:'recipesearch',component:EdamamSearchComponent},
  {path: 'recipedetail',component: RecipeDetailComponent},
  {path: "", redirectTo: "home", pathMatch: "full"}

];

@NgModule({
  imports: [
    CommonModule, [RouterModule.forRoot(routes)]],
  exports: [RouterModule]
})
export class AppRoutingModule { }
