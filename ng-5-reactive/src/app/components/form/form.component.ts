import { Component, inject, OnDestroy } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/note.model';
import { v4 as uuid } from 'uuid';
import { FormsModule } from '@angular/forms';
import { LoaderService } from '../../services/loader.service';
import { takeUntil, finalize, Subject } from 'rxjs';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnDestroy {
  noteService = inject(NoteService);
  loaderService = inject(LoaderService);
  content: string = '';

  private destroy$ = new Subject<void>();

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
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

    this.noteService
      .addNote(newNote)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => (this.content = ''))
      )
      .subscribe();
  }
}
