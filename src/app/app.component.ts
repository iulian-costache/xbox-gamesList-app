import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
 <nav class='navbar navbar-expand navbar-light bg-light'>
   <a class='navbar-brand'>{{pageTitle}}</a>
<ul class='nav nav-pills'>
  <li><a class='nav-link' [routerLink]="['/welcome']" >Home</a></li>
  <li><a class='nav-link' routerLink='/games'>List of games reviewed</a></li>
</ul>
 </nav>
 <div class="container">
   </div>
<router-outlet></router-outlet> `})

export class AppComponent {
  pageTitle: string = 'Xbox Games Management';
}
