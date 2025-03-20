import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  private isMobileSubject = new BehaviorSubject<boolean>(false);
  isDesktop$: Observable<boolean>;
  isMobile$: Observable<boolean> = this.isMobileSubject.asObservable();

  constructor() {
    this.isDesktop$ = new Observable<boolean>(observer => {
      this.isMobile$.subscribe(isMobile => {
        observer.next(!isMobile);
      });
    });

    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  private checkScreenSize(): void {
    const width = window.innerWidth;
    this.isMobileSubject.next(width < 1440);
  }
}