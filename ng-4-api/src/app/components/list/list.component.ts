import { Component, inject, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Note } from '../../models/note.model';
import { NoteService } from '../../services/note.service';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { LoaderService } from '../../services/loader.service';
import { EmptyComponent } from '../empty/empty.component';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-list',
  imports: [ItemComponent, ReversePipe, EmptyComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  noteService = inject(NoteService);
  loaderService = inject(LoaderService);

  get notes() {
    return this.noteService.notes;
  }

  set notes(value: Note[]) {
    this.noteService.notes = value;
  }

  ngOnInit() {
    this.loaderService.show();
    this.noteService
      .getNotes()
      .pipe(finalize(() => this.loaderService.hide()))
      .subscribe({
        next: (notes) => (this.notes = notes),
        error: (error) => alert(`Error Occurred: ${error.message}`),
      });
  }

  onRemove(note: Note) {
    this.loaderService.show();
    this.noteService
      .deleteNoteById(note.id)
      .pipe(finalize(() => this.loaderService.hide()))
      .subscribe({
        next: () => (this.notes = this.notes.filter((n) => n.id !== note.id)),
        error: (error) => alert(`Error Occurred: ${error.message}`),
      });
  }
}
