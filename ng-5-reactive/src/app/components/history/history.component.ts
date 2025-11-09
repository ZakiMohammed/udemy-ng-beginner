import { Component, effect, inject, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { NoteAction, storageKeys } from '../../models/note.model';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-history',
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent implements OnInit {
  noteService = inject(NoteService);
  localService = inject(LocalStorageService);
  noteActions: NoteAction[] = [];

  constructor() {
    effect(() => {
      const action = this.noteAction();
      if (action) {
        this.noteActions.unshift(action);
        this.localService.setItem(storageKeys.noteActions, this.noteActions);
      }
    });
  }

  get noteAction() {
    return this.noteService.noteAction;
  }

  ngOnInit(): void {
    const noteActions = this.localService.getItem<NoteAction[]>(storageKeys.noteActions);
    if (noteActions) {
      this.noteActions = noteActions;
    }
  }

  clearAll() {
    this.noteActions = [];
    this.localService.clear();
  }

  getActionText(action: NoteAction) {
    const payload = action.payload ? ` - ${action.payload.id}` : '';
    return `${action.type}${payload}`;
  }
}
