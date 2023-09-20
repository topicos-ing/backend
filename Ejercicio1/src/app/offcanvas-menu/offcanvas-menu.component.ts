// offcanvas-menu.component.ts
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-offcanvas-menu',
  templateUrl: './offcanvas-menu.component.html',
  styleUrls: ['./offcanvas-menu.component.css']
})
export class OffcanvasMenuComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (this.isOpen && !(event.target as HTMLElement).closest('.offcanvas-menu')) {
      this.isOpen = false;
    }
  }
}
