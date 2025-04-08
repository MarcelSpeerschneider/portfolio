import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ResponsiveService } from '../services/responsive.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent implements OnInit, OnDestroy {


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
