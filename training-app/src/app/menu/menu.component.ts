import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems = [ 
    { label: 'Accueil', route: '/accueil' },
    { label: 'À propos', route: '/a-propos' },
    { label: 'Contact', route: '/contact' } 
  ]

}
