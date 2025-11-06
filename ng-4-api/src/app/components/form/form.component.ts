import { Component, inject } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/note.model';
import { v4 as uuid } from 'uuid';
import { FormsModule } from '@angular/forms';
import { LoaderService } from '../../services/loader.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  noteService = inject(NoteService);
  loaderService = inject(LoaderService);
  content: string = '';

  get notes() {
    return this.noteService.notes;
  }

  set notes(value: Note[]) {
    this.noteService.notes = value;
  }

  onAdd(event: Event) {
    event.preventDefault();

    if (!this.content) {
      alert('Please fill the form');
      return;
    }

    const newNote: Note = {
      id: uuid(),
      content: this.content,
    };

    this.loaderService.show();
    this.noteService
      .addNote(newNote)
      .pipe(
        finalize(() => {
          this.loaderService.hide();
          this.content = '';
        })
      )
      .subscribe({
        next: (responseNote) => (this.notes = [...this.notes, responseNote]),
        error: (error) => alert(`Error Occurred: ${error.message}`),
      });
  }
}
