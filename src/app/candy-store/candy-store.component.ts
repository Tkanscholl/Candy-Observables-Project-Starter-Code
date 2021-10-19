import { PillowCaseService } from './../pillow-case/pillow-case.service';
import { CandyStoreService } from './candy-store.service';
import { Candy } from './../models/candy.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-candy-store',
  templateUrl: './candy-store.component.html',
  styleUrls: ['./candy-store.component.css'],
})
export class CandyStoreComponent implements OnInit {
  // Create local Subscription
  updatedCandySub: Subscription;

  candiesForSale: Candy[] = [];

  constructor(
    private candyStoreService: CandyStoreService,
    private pillowCaseService: PillowCaseService
  ) {}

  ngOnInit(): void {
   this.updatedCandySub = this.candyStoreService.updatedCandies.subscribe( (newCandies) =>
   { this.candiesForSale = newCandies})
   ;


    //this.updatedCandySub = this.candiesForSale = this.candyStoreService.getCandiesForSale();
    // Subscribe to the a Subject on candyStore and store in a local Subscription
  }

  onSaveCandyToBag(candyName: string): void {
    this.pillowCaseService.addNewCandy(candyName);
  }

  onNewDelivery() {
    this.candyStoreService.addFiveCandies();
  }
  ngOndestroy(): void {
    this.updatedCandySub.unsubscribe();
  }
}
