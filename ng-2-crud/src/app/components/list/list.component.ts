import { Component, inject } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Note } from '../../models/note.model';
import { NoteService } from '../../services/note.service';
import { ReversePipe } from '../../pipes/reverse.pipe';

@Component({
  selector: 'app-list',
  imports: [ItemComponent, ReversePipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  noteService = inject(NoteService);

  get notes() {
    return this.noteService.notes;
  }

  set notes(value: Note[]) {
    this.noteService.notes = value;
  }

  onRemove(note: Note) {
    this.notes = this.notes.filter((n) => n.id !== note.id);
  }
}
