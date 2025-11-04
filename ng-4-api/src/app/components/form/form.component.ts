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

      this.loaderService.show();
      this.noteService
        .addNote(newNote)
        .pipe(finalize(() => this.loaderService.hide()))
        .subscribe({
          next: () => (this.noteService.notes = [...this.noteService.notes, newNote]),
          error: (error) => alert(`Error Occured: ${error.message}`),
          complete: () => {
            this.loaderService.hide();
            this.content = '';
          },
        });
    } catch (error: any) {
      alert(`Error Occurred: ${error.message}`);
    } finally {
      this.content = '';
    }
  }
}
