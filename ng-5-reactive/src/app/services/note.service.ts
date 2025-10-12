import { inject, Injectable, signal } from '@angular/core';
import { Note } from '../models/note.model';
import { NoteApiService } from './note-api.service';
import { LoaderService } from './loader.service';
import { tap, finalize, of, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  noteApiService = inject(NoteApiService);
  loaderService = inject(LoaderService);

  notes = signal<Note[]>([]);

  getNotes() {
    this.loaderService.show();
    return this.noteApiService.getNotes().pipe(
      tap((notes) => this.notes.set(notes)),
      catchError(this.handleError),
      finalize(() => this.loaderService.hide())
    );
  }

  addNote(note: Note) {
    this.loaderService.show();
    return this.noteApiService.addNote(note).pipe(
      tap((newNote) => this.notes.set([...this.notes(), newNote])),
      catchError(this.handleError),
      finalize(() => this.loaderService.hide())
    );
  }

  deleteNoteById(id: string) {
    this.loaderService.show();
    return this.noteApiService.deleteNoteById(id).pipe(
      tap(() => this.notes.set(this.notes().filter((n) => n.id !== id))),
      catchError(this.handleError),
      finalize(() => this.loaderService.hide())
    );
  }

  handleError(error: any) {
    alert(`Error Occurred: ${error.message}`);
    return of(error);
  }
}
