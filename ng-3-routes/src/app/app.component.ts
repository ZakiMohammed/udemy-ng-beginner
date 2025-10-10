import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { EmptyComponent } from './components/empty/empty.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, FormComponent, ListComponent, EmptyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  protected readonly title = signal('ng-1-init');
}
