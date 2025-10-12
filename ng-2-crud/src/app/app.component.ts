import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, FormComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  
}
