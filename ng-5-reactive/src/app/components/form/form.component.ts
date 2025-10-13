import { Component, DestroyRef, inject } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/note.model';
import { v4 as uuid } from 'uuid';
import { FormsModule } from '@angular/forms';
import { LoaderService } from '../../services/loader.service';
import { finalize } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  private readonly destroyRef = inject(DestroyRef);
  noteService = inject(NoteService);
  loaderService = inject(LoaderService);
  content: string = '';

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

    this.noteService
      .addNote(newNote)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => (this.content = ''))
      )
      .subscribe();
  }
}
