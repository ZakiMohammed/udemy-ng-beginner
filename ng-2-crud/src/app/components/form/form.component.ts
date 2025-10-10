import { Component, inject } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/note.model';
import { v4 as uuid } from 'uuid';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  noteService = inject(NoteService);
  content: string = '';

  onAdd(event: Event) {
    try {
      event.preventDefault();

      if (!this.content) {
        alert('Please fill the form');
        return;
      }

      const newNote: Note = {
        id: uuid(),
        content: this.content,
      };

      this.noteService.notes = [...this.noteService.notes, newNote];
    } catch (error: any) {
      alert(`Error Occurred: ${error.message}`);
    } finally {
      this.content = '';
    }
  }
}
