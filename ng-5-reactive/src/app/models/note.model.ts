export interface Note {
  id: string;
  content: string;
}

export interface NoteAction {
  type: ActionType;
  payload?: Note;
}

export type ActionType = 'Add' | 'Remove' | 'GetAll';

export const storageKeys = {
  noteActions: 'noteActions',
};
