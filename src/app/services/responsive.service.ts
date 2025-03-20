import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  private isMobileSubject = new BehaviorSubject<boolean>(false);
  private isDesktopSubject = new BehaviorSubject<boolean>(true);

  isMobile$: Observable<boolean> = this.isMobileSubject.asObservable();
  isDesktop$: Observable<boolean> = this.isDesktopSubject.asObservable();

  constructor() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  private checkScreenSize(): void {
    const width = window.innerWidth;
    this.isMobileSubject.next(width < 768);
    this.isDesktopSubject.next(width >= 1440);
  }
}
