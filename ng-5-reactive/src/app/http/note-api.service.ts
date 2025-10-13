import { inject, Injectable } from '@angular/core';
import { Note } from '../models/note.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NoteApiService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl + 'notes';

  getNotes() {
    return this.http.get<Note[]>(this.apiUrl);
  }

  addNote(note: Note) {
    return this.http.post<Note>(this.apiUrl, note);
  }

  deleteNoteById(id: string) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
