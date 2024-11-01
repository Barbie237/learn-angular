import { Routes } from '@angular/router';
import { FirstlsComponent } from './firstls/firstls.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './PageNotFoundComponent';
import { inject } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { Users } from './userid.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [

    { path: 'first-component', component: FirstlsComponent },
    { path: 'second-component', component: SecondComponent },
    { path: "user/:userId", component: Users },
    { path: '**', component: PageNotFoundComponent },
    { path: '', redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
    {
        path: "old-user-page",
        redirectTo: ({ queryParams }) => {
            const errorHandler = inject(ErrorHandler);
            const userIdParam = queryParams['userId'];
            if (userIdParam !== undefined) {
                return `/user/${userIdParam}`;
            } else {
                errorHandler.handleError(new Error('Attempted navigation to user page without user ID.'));
                return `first-component`;
            }
        },
    },

    {
        path: 'first-component',
        component: FirstlsComponent, // this is the component with the <router-outlet> in the template
        children: [
            {
                path: 'child-a', // child route path
                component: SecondComponent, // child route component that the router renders
            },
            {
                path: 'child-b',
                component: Users, // another child route component that the router renders
            },
        ],
    },

];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// });
  
