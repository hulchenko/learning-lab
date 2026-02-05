import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  logText(text) {
    console.log(text)
  }

}
