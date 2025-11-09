import { inject, Injectable, signal } from '@angular/core';
import { Note, NoteAction } from '../models/note.model';
import { NoteApiService } from '../http/note-api.service';
import { LoaderService } from './loader.service';
import { tap, finalize, of, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  noteApiService = inject(NoteApiService);
  loaderService = inject(LoaderService);

  notes = signal<Note[]>([]);
  noteAction = signal<NoteAction | null>(null);

  getNotes() {
    this.loaderService.show();
    return this.noteApiService.getNotes().pipe(
      map((notes) => {
        this.notes.set(notes);
        this.noteAction.set({ type: 'GetAll' });
      }),
      catchError(this.handleError),
      finalize(() => this.loaderService.hide())
    );
  }

  addNote(note: Note) {
    this.loaderService.show();
    return this.noteApiService.addNote(note).pipe(
      map((newNote) => {
        this.notes.set([...this.notes(), newNote]);
        this.noteAction.set({ type: 'Add', payload: newNote });
      }),
      catchError(this.handleError),
      finalize(() => this.loaderService.hide())
    );
  }

  deleteNote(note: Note) {
    this.loaderService.show();
    return this.noteApiService.deleteNoteById(note.id).pipe(
      map(() => {
        this.notes.set(this.notes().filter((n) => n.id !== note.id));
        this.noteAction.set({ type: 'Remove', payload: note });
      }),
      catchError(this.handleError),
      finalize(() => this.loaderService.hide())
    );
  }

  handleError(error: any) {
    alert(`Error Occurred: ${error.message}`);
    return of(error);
  }
}
