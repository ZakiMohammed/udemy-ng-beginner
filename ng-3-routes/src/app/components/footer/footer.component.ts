import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  router = inject(Router);
  year = new Date().getFullYear();

  gotoAbout() {
    this.router.navigate(['/about']);
  }
}
