import { Component, effect, inject, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { NoteAction, storageKeys } from '../../models/note.model';
import { LocalStorageService } from '../../services/local-storage.service';
import { UpperCasePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-history',
  imports: [UpperCasePipe, NgClass],
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

  getTypeClass(action: NoteAction) {
    switch (action.type) {
      case 'Add':
        return 'text-bg-success';
      case 'Remove':
        return 'text-bg-danger';
      default:
        return 'text-bg-secondary';
    }
  }
}
