import { Component, inject } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-empty',
  imports: [],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.scss',
})
export class EmptyComponent {
  noteService = inject(NoteService);

  get notes() {
    return this.noteService.notes;
  }
}
