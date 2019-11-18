# Task Organizer SpringBoot + Angular 8

[![versionjava](https://img.shields.io/badge/jdk-11-brightgreen.svg?logo=java)](https://openjdk.java.net)
[![versionSpring](https://img.shields.io/badge/Spring-2.2.1-brightgreen)](https://spring.io/)
[![versionAngular](https://img.shields.io/badge/Angular-8-brightgreen)](https://angular.io/)
[![mavenVersion](https://img.shields.io/badge/Maven-3.6.1-brightgreen)](https://maven.apache.org/)


## Endpoints
![](https://raw.githubusercontent.com/orestwojtowicz/task-organizer-deploy/master/task-organizer/images/swagger-endpoints.png)

## Creating notes
![](https://raw.githubusercontent.com/orestwojtowicz/task-organizer-deploy/master/task-organizer/images/newNote.gif)
## Search note
![](https://raw.githubusercontent.com/orestwojtowicz/task-organizer-deploy/master/task-organizer/images/search.gif)
## Send feedback
![](https://raw.githubusercontent.com/orestwojtowicz/task-organizer-deploy/master/task-organizer/images/feedback1.gif)

![](https://raw.githubusercontent.com/orestwojtowicz/task-organizer-deploy/master/task-organizer/images/feedback2.gif)


## Tests

Application has unit test for backend part and also frontend.

Sample test for NoteService. This test is checking that data are converter correctly from Entity to ViewModel

``
    @Test
    void convertEntityToViewModel() {
        // given
        Note singleNote = new Note();
        when(noteRepository.findById(1L)).thenReturn(Optional.of(singleNote));

        var returnView = modelMapper.map(note, NoteViewModel.class);

        assertEquals(note.getText(), returnView.getText());
        assertEquals(note.getTitle(), returnView.getTitle());
        assertEquals(note.getLastModif(), returnView.getLastModif());
        // when
        Optional<Note> foundNote = noteRepository.findById(1L);
        assertThat(foundNote.get()).isNotNull();
        // then
        verify(noteRepository).findById(1L);
        verify(noteRepository).findById(anyLong());
    }
``

Sample test for Angular service, for creating new note

``
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

``



## Getting Started

To launch application, you need to download project and have JRE installed. Use your terminal, go into task-organizer,
use command java -jar target/demo-task-organizer.jars
It will start whole application on http://www.localhost:8080<br>
[![mavenVersion](https://img.shields.io/badge/JRE-download-brightgreen)](https://maven.apache.org/)

## Database

Application is using h2 in memory database, you can check it under localhost:8080/h2-console
JDBC URL - jdbc:h2:mem:damian
User Name: damian





