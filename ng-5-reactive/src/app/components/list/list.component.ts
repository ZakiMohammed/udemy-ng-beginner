import { Component, inject, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Note } from '../../models/note.model';
import { NoteService } from '../../services/note.service';
import { ReversePipe } from '../../pipes/reverse.pipe';

@Component({
  selector: 'app-list',
  imports: [ItemComponent, ReversePipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  noteService = inject(NoteService);

  get notes() {
    return this.noteService.notes;
  }

  ngOnInit() {
    this.noteService.getNotes().subscribe();
  }

  onRemove(note: Note) {
    this.noteService.deleteNoteById(note.id).subscribe();
  }
}
