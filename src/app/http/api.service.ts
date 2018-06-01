import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Api {
  constructor(private http: HttpClient) { }

  request(resourcePath) {
    return this.http.get(resourcePath);
  }
}
