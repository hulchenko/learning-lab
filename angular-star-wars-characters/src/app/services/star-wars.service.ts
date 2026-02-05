import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { Subject } from 'rxjs';
import { Http, Response } from '@angular/http';

@Injectable()
export class StarWarsService {
  public characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ]
  charactersChanged = new Subject<void>();
  postData;
  constructor(private logService: LogService, private http: Http) { }


  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }

    return this.characters.filter((i) => {
      return i.side === chosenList;
    })
  }

  fetchCharacters() {
    this.http.get(`https://swapi.dev/api/people`)
      .map((response: Response) => {
        const data = response.json();
        const extractedCharacters = data.results;
        const chars = extractedCharacters.map((i) => {
          return { name: i.name, side: '' }
        });
        return chars;

      })
      .subscribe((data) => {
        console.log(`TEST 2`, data)
        this.characters = data;
        this.charactersChanged.next()
      });
  }

  // example of POST request
  updateCharacters() {
    this.postData = { description: 'Data I want to pass, could be any kind of data/ object' }
    this.http.post('https://my-api.com/endpoint', this.postData)
      .map((response: Response) => {
        // map() is totally optional, just subscribe() without it!
        return response.json(); // fetch the body of the response - this of course also works for post requests
      })
      .subscribe((transformedData: any) => {
        // Use your response data here
        console.log(transformedData);
      });

  }

  onSideChosen(passedCharacterInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === passedCharacterInfo.name;
    })
    this.characters[pos].side = passedCharacterInfo.side;
    this.charactersChanged.next();
    this.logService.logText(`Changed side of ${passedCharacterInfo.name}, the chosen side now is: ${passedCharacterInfo.side}`)
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex((i) => {
      return i.name === name;
    })
    console.log(`POSITION`, pos)
    if (pos !== -1) { // returned if no index was find, hence needs to be added
      return;
    }
    const newChar = { name: name, side: side }
    this.characters.push(newChar)
  }
}
