import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResponsiveService } from '../services/responsive.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit, OnDestroy {

  isMobile = false;
  isDesktop = true;
  private subscriptions = new Subscription();

  constructor(private responsiveService: ResponsiveService) { }

    ngOnInit(): void {
      this.subscriptions.add(
        this.responsiveService.isMobile$.subscribe(value => {
          this.isMobile = value;
          this.isDesktop = !value;
        })
      );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


}
