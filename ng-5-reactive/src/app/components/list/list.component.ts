import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Note } from '../../models/note.model';
import { NoteService } from '../../services/note.service';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { EmptyComponent } from '../empty/empty.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-list',
  imports: [ItemComponent, ReversePipe, EmptyComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  noteService = inject(NoteService);

  get notes() {
    return this.noteService.notes;
  }

  ngOnInit() {
    this.noteService.getNotes().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }

  onRemove(note: Note) {
    this.noteService.deleteNoteById(note.id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }
}
