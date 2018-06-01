import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Api} from "./http/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Api]
})
export class AppComponent implements OnInit {
  title = 'app';
  obs$: Observable<any>;
  resourcePath = 'http://localhost:8000/api/note'

  constructor (private api: Api) {
  }

  ngOnInit () {
    /*this.obs$ = this.http.get(this.resourcePath);
    this.obs$.subscribe( res => console.log('response', res));*/
    this.getNote();
  }

  getNote() {
    this.api.request(this.resourcePath)
      .subscribe(res => console.log('reponse+1', res));
  }
}
