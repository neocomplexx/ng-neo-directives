import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class HeaderService {

  public changed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(public router: Router, private location: Location) {
  }

  public notifyChange(changed: boolean): void {
    this.changed.next(changed)
  }

  public navigateToComponent(component: string) {
    this.router.navigate([component]);
  }

  public destroyComponent(): void {
    this.changed.next(false);
  }
  public closeComponent(): void {
    this.destroyComponent();
    this.location.back();
  }
}
