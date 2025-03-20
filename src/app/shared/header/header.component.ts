import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMobile = false;
  isDesktop = true;
  private subscriptions = new Subscription();

  constructor(private responsiveService: ResponsiveService) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.responsiveService.isMobile$.subscribe(value => this.isMobile = value)
    );
    this.subscriptions.add(
      this.responsiveService.isDesktop$.subscribe(value => this.isDesktop = value)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

