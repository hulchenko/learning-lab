import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'app/services/star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [{ display: 'None', value: '' }, { display: 'Light', value: 'light' }, { display: 'Dark', value: 'dark' }]

  constructor(public starWarsService: StarWarsService) { }

  ngOnInit() {
  }

  onFormSubmit(submittedForm) {
    // required parameter provided in HTML sets .invalid property to true if field is empty
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm.value)
    const name = submittedForm.value.name;
    const side = submittedForm.value.side;
    this.starWarsService.addCharacter(name, side)
  }
}
