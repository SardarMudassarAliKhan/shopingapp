import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes/recipes-item/recipes-item.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { ShoppingeditComponent } from './shopping-list/shoppingedit/shoppingedit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesItemComponent,
    RecipesDetailsComponent,
    ShoppingeditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
