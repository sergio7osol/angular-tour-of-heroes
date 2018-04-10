import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { ExerciseComponent } from './exercise/exercise.component';


@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    ExerciseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
