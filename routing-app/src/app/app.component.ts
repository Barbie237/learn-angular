import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NameEditorComponent } from "./name-editor/name-editor.component"
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { ProfileEditorComponent } from "./profile-editor/profile-editor.component";
import { ActorFormComponent } from './actor-form/actor-form.component';
  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive, NameEditorComponent, ProfileEditorComponent, ActorFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'routing-app';
  // @Input()
  // set id(heroId: string) {
  //   this.hero$ = this.service.getHero(heroId);
  // }
}
