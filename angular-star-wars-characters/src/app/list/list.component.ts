import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from 'app/services/star-wars.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  characters = [];
  loadedSide = 'all';
  subscription: Subscription;

  constructor(public activatedRoute: ActivatedRoute, public starWarsService: StarWarsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.characters = this.starWarsService.getCharacters(param.chosenSide);
      this.loadedSide = param.chosenSide;
    });
    this.subscription = this.starWarsService.charactersChanged.subscribe(() => {
      this.characters = this.starWarsService.getCharacters(this.loadedSide);
    })
  }

  ngOnDestroy(): void {
    // as soon as the updated character triggers, remove subscription from memory, to avoid memory pollution
    this.subscription.unsubscribe();
  }

}
