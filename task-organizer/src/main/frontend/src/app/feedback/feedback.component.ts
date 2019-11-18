import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../shared/services/api.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  model: FeedBackViewModel = {
    name: '',
    email: '',
    content: ''
  };

  msg: boolean = false;
  sending: boolean = false;


  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit() {
  }

  sendFeedback(): void {
    this.sending = true;
    this.apiService.postFeedback(this.model).subscribe(
      rest => {
        this.msg = true;
        this.sending = false;
        setTimeout(() => {
          this.sending = false;
          this.router.navigateByUrl('/');
        }, 3000)


      },
      error => {
        alert("An error has occured while sending feedback")
      }
    );
  }

}


export interface FeedBackViewModel {
  name: string;
  email: string;
  content: string;
}
