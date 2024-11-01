import { Component } from '@angular/core'; 

@Component({
    selector: 'not-found',
    standalone: true,
     template: `
    <h2> 404 error! page not found</h2>`,
    styleUrl: './app.component.css',

})
export class PageNotFoundComponent {
}
