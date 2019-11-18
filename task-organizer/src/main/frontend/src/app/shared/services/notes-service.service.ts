import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Notebook, Notes} from '../../notes/model/notebook';

@Injectable({
  providedIn: 'root'
})





export class NotesServiceService {


  public BASE_URL = "http://localhost:8080";
  public NOTES_ALL = `${this.BASE_URL}\\notes\\all`;
  public NOTES_BY_NOTEBOOK_URL = `${this.BASE_URL}\\notes\\notebook\\`; // id
  public NOTES_BY_ID_URL = `${this.BASE_URL}\\notes\\byid`; // id
  public POST_NEW_NOTE_URL = `${this.BASE_URL}\\notes`;
  public DELETE_NOTE_URL = `${this.BASE_URL}\\notes\\`;


  constructor(private http: HttpClient) { }

  getNotesByNotebook(notebookId: string): Observable<Notes[]> {
      return this.http.get<Notes[]>(this.NOTES_BY_NOTEBOOK_URL + notebookId);
  }

 deleteNote(noteId: string): Observable<any> {
   return this.http.delete(this.DELETE_NOTE_URL + noteId);
 }


  getAllNotes(): Observable<Notes[]> {
     return this.http.get<Notes[]>(this.NOTES_ALL);
  }

    saveNote(note: Notes): Observable<Notes> {
    return this.http.post<Notes>(this.POST_NEW_NOTE_URL, note);
    }


}




















