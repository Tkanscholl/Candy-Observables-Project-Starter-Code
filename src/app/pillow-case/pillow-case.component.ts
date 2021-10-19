import { Candy } from './../models/candy.model';
import { PillowCaseService } from './pillow-case.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pillow-case',
  templateUrl: './pillow-case.component.html',
  styleUrls: ['./pillow-case.component.css'],
})
export class PillowCaseComponent implements OnInit, OnDestroy {
  // Create local Subscription
updatedCandiesSub: Subscription;



  myCandies: Candy[] = [];

  constructor(private pillowCaseService: PillowCaseService) {}

  ngOnInit(): void {

    this.updatedCandiesSub = this.pillowCaseService.updatedCandies.subscribe( newCAndies => {
      this.myCandies = newCAndies
    })


    // this.updatedCandiesSub = this.myCandies = this.pillowCaseService.getMySecretStash();
    // Subscribe to the a Subject on pillowCase and store in a local Subscription
  }

  onEatAllCandy(): void {
    this.pillowCaseService.clearCandy();
  }
  ngOnDestroy(): void {
    this.updatedCandiesSub.unsubscribe();

  }
}
