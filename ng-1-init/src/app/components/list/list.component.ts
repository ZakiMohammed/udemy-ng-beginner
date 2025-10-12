import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { EmptyComponent } from '../empty/empty.component';

@Component({
  selector: 'app-list',
  imports: [ItemComponent, EmptyComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

}
