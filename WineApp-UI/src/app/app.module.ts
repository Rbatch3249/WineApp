import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewWinesComponent } from './view-wines/view-wines.component';
import { AppRoutingModule } from './/app-routing.module';
import { WinePairComponent } from './Wine-PairPage/wine-pairpage.component';
import { WineService } from './service/wine.service';
import { RecipesService } from './service/recipes.service';
import { InputRecipeComponent } from './input-recipe/input-recipe.component';
import { Redwine1Component } from './redwine1/redwine1.component';
import { Redwine2Component } from './redwine2/redwine2.component';
import { Redwine3Component } from './redwine3/redwine3.component';
import { Whitewine1Component } from './whitewine1/whitewine1.component';
import { Whitewine2Component } from './whitewine2/whitewine2.component';
import { Whitewine3Component } from './whitewine3/whitewine3.component';
import { RosewineComponent } from './rosewine/rosewine.component';
import { Whitewine4Component } from './whitewine4/whitewine4.component';
import { Whitewine5Component } from './whitewine5/whitewine5.component';
import { Redwine4Component } from './redwine4/redwine4.component';
import { RandomRecipeComponent } from './random-recipe/random-recipe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { EdamamSearchComponent } from './edamam-search/edamam-search.component';
import { HomeComponent } from './home/home.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewWinesComponent,
    WinePairComponent,
    InputRecipeComponent,
    Redwine1Component,
    Redwine2Component,
    Redwine3Component,
    Whitewine1Component,
    Whitewine2Component,
    Whitewine3Component,
    RosewineComponent,
    Whitewine4Component,
    Whitewine5Component,
    Redwine4Component,
    RandomRecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    EdamamSearchComponent,
    HomeComponent,
    WineDetailComponent,
    ContactComponent,
    
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
 
    
  ],
  providers: [HttpClientModule,WineService,RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
