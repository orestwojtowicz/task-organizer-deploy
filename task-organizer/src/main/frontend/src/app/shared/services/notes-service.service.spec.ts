
import {getTestBed, TestBed, tick} from '@angular/core/testing';

import { NotesServiceService } from './notes-service.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Notes} from "../../notes/model/notebook";
import {ApiService} from "./api.service";
import any = jasmine.any;




describe('NotesServiceService', () => {
  let httpMock: HttpTestingController;
  let noteService: NotesServiceService;
  let notes: Notes[] = [{id:'1', title: 'title', text: 'text', lastModif: new Date(), notebookId: '1'}];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [NotesServiceService]
    });

    httpMock = getTestBed().get(HttpTestingController);
    noteService = getTestBed().get(NotesServiceService);
  });


  it('it is created', function() {
    expect(noteService).toBeTruthy();
  });

  // arrange
  it ('should get all notes from http', () => {
    let dummyNotes: Notes[] = notes;

    // act
    noteService.getAllNotes().subscribe( res => {
      expect(res.length).toBe(1);
      expect(res).toEqual(dummyNotes);
    });
    // http mock

    let req = httpMock.expectOne(noteService.NOTES_ALL);
    expect(req.request.method).toBe("GET");
    req.flush(dummyNotes);
  // end of should get all notes from http

  });


  // arrange
  it ('should delete single note', () => {


    noteService.deleteNote('1').subscribe((note: any) => {
      expect(note).toBe(1);
    });

    let req = httpMock.expectOne(noteService.DELETE_NOTE_URL  + '1');
    expect(req.request.method).toBe("DELETE");
    req.flush(1);
    httpMock.verify();
    // end of should delete single note
  });

  // arrange
  it ('should post new single note', () => {
    noteService.saveNote(
      {id: '2', text: 'put', title: 'title', lastModif: new Date(), notebookId: '1'}
    ).subscribe((data: any) => {
      expect(data.id).toBe('2');
      expect(data.title).toBe('title');
      expect(data.lastModif).toEqual(new Date());
      expect(data.notebookId).toBe('1');
    });
    let req = httpMock.expectOne(noteService.POST_NEW_NOTE_URL);
    expect(req.request.method).toBe("POST");
    req.flush({
      id: '2',
      text: 'put',
      title: 'title',
      lastModif: new Date(),
      notebookId: '1'
    });
    httpMock.verify();
  });

  it ('should get single note by id ', () => {
    noteService.getNotesByNotebook('1').subscribe((data: any) => {
      expect(data.id).toBe('1');
    });
    let req = httpMock.expectOne(noteService.NOTES_BY_NOTEBOOK_URL + '1');
    expect(req.request.method).toBe("GET");
    httpMock.verify();
  });


  it ('should create new note ', () => {
    noteService.saveNote(
      {id: '3', text: 'new text', title: 'new title', notebookId: '2', lastModif: new Date()}
    ).subscribe((data: any) => {
      expect(data.id).toBe('3');
      expect(data.title).toBe('new title');
    });
    let req = httpMock.expectOne(noteService.POST_NEW_NOTE_URL);
    expect(req.request.method).toBe("POST");
    httpMock.verify();
  });


});



