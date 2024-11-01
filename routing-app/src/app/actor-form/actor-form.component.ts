import { Component } from '@angular/core';
import { Actor } from '../actor';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-actor-form',
    standalone: true,
    imports: [FormsModule, CommonModule], // Include FormsModule here
    templateUrl: "actor-form.component.html",
})
    
export class ActorFormComponent {
    skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
    // model = new Actor(18, 'Tom Cruise', this.skills[3], 'CW Productions');
    submitted = false;
    onSubmit() {
        this.submitted = true;
    };

    model = { name: 'gio' }; // Initialize the model

    myActress = new Actor(42, 'Marilyn Monroe', 'Singing');
     
    // console.log('My actress is called ' + myActress.name); // "My actress is called Marilyn"
}
