import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { takeUntil } from 'rxjs/operators';
import { GetDataService } from './get-data.service';

@Injectable({
  providedIn: 'root'
})
export class SlowComponentResolverService implements Resolve<any> {

  constructor(private service: GetDataService, @Inject(PLATFORM_ID) private platformId: any) { }

  public resolve(): Observable<any> {
    if (isPlatformBrowser(this.platformId)) {
      return this.service.getSlow();
    }

    const watchdog: Observable<number> = timer(500);

    return Observable.create(subject => {
      this.service.getSlow().pipe(takeUntil(watchdog)).subscribe(response => {
        subject.next(response);
        subject.complete();
      });
      watchdog.subscribe(() => {
        subject.next(null);
        subject.complete();
      });
    });
  }
}