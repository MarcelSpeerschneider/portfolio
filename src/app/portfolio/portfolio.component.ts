import { Component } from '@angular/core';
import { JoinComponent } from "./join/join.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [JoinComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
