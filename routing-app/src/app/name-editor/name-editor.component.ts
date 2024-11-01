import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Importer ReactiveFormsModule

@Component({
    selector: 'app-name-editor',
    standalone: true,
    imports: [ReactiveFormsModule],
    template: `
            <label for="name">Name: </label>
            <input id="name" type="text" [formControl]="name">
            <p>Value: {{ name.value }}</p>
            <button type="button" (click)="updateName()">Update Name</button>
    `,
    styleUrls: ['./name-editor.component.css'],
})
    
export class NameEditorComponent {
    name = new FormControl('');
    updateName() {
        this.name.setValue('Nancy');
    }
}