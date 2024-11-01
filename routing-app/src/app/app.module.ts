import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ActorFormComponent } from './actor-form/actor-form.component';
 
@NgModule({
    imports: [ 
    ReactiveFormsModule, BrowserModule, CommonModule, FormsModule
  ],
  declarations: [AppComponent, ActorFormComponent],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppForm { }