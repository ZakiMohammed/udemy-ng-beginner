import { Component, input, output } from '@angular/core';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  readonly note = input.required<Note>();
  readonly onRemove = output<Note>();
  
  remove() {
    this.onRemove.emit(this.note());
  }
}
