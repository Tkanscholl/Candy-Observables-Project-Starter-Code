import { Candy } from './../models/candy.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class PillowCaseService {
  // Create a "Subject" that to emit when a new candy is added to bag
updatedCandies = new Subject <Candy[]>();

  private myCandies: Candy[] = [new Candy('Kit Kat'), new Candy('Pop Rocks')];

  getMySecretStash() {
    return this.myCandies.slice();
  }

  addNewCandy(name: string) {
    this.myCandies.push(new Candy(name));
   this.updatedCandies.next(this.myCandies.slice());
  }

  clearCandy() {
    this.myCandies = [];

  }
}
