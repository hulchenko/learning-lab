import { Component, OnInit, Input } from '@angular/core';
import { StarWarsService } from 'app/services/star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;

  constructor(public starWarsService: StarWarsService) { }

  ngOnInit() {
  }

  onAssign(side) {
    this.starWarsService.onSideChosen({ name: this.character.name, side: side })
  }

}
