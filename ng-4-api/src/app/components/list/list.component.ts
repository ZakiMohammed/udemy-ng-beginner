import { Component, inject, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Note } from '../../models/note.model';
import { NoteService } from '../../services/note.service';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-list',
  imports: [ItemComponent, ReversePipe],
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
    this.noteService.getNotes().subscribe({
      next: (notes) => (this.notes = notes),
      error: (error) => alert(`Error Occured: ${error.message}`),
      complete: () => this.loaderService.hide(),
    });
  }

  onRemove(note: Note) {
    this.loaderService.show();
    this.noteService.deleteNoteById(note.id).subscribe({
      next: () => (this.notes = this.notes.filter((n) => n.id !== note.id)),
      error: (error) => alert(`Error Occured: ${error.message}`),
      complete: () => this.loaderService.hide(),
    });
  }
}
