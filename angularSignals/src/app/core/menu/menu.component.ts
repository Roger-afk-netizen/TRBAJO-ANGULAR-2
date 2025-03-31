import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonLabel } from 'primeng/button';
import { Menubar, MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu',
  imports: [Menubar],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {
    this.items = [
      {
      label: 'Home',
      icon: 'pi pi-home'
      },
      {
      label: 'Ejemplos de señales',
      icon: 'pi pi-star'
      items: [
        {
          label: 'Ejemplo 1'
          icon: 'pi pi-wave-pulse'
          RouterLink: 'ejemplo1'
        },

        {
          label: 'Ejemplo 2'
          icon: 'pi pi-wave-pulse'
          RouterLink: 'ejemplo2'
        },

        {
          label: 'Ejemplo 3'
          icon: 'pi pi-wave-pulse'
          RouterLink: 'ejemplo3'
        },

        {
          label: 'Ejemplo 4'
          icon: 'pi pi-wave-pulse'
          RouterLink: 'ejemplo4'
        },

      ]
      
      },
      
      ]
  }


}
