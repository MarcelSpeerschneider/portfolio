import { Component } from '@angular/core';
import { JoinComponent } from "./join/join.component";
import { PokedexComponent } from "./pokedex/pokedex.component";
import { PixelquestComponent } from "./pixelquest/pixelquest.component";
import { SimpleCrmComponent } from "./simple-crm/simple-crm.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [JoinComponent, PokedexComponent, PixelquestComponent, SimpleCrmComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
