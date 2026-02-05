import { Component, OnInit } from '@angular/core';
import { StarWarsService } from './services/star-wars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit(): void {
    this.starWarsService.fetchCharacters();
  }
}
