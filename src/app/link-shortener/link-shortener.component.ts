import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard'; // Du musst ngx-clipboard installieren: npm install ngx-clipboard
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-link-shortener',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './link-shortener.component.html',
  styleUrl: './link-shortener.component.scss'
})
export class LinkShortenerComponent {
  originalLink: string = 'https://www.tiktok.com/@efratelmalich/video/7483843620869573904?is_from_webapp=1&sender_device=pc';
  shortenedLink: string = '';
  showCopySuccess: boolean = false;

  constructor(private clipboardService: ClipboardService) {
    // Beim Start automatisch den Link kürzen
    this.shortenLink();
  }

  shortenLink(): void {
    // Prüfen, ob der Link ein Fragezeichen enthält
    const questionMarkIndex = this.originalLink.indexOf('?');
    if (questionMarkIndex !== -1) {
      // Alles bis zum Fragezeichen behalten
      this.shortenedLink = this.originalLink.substring(0, questionMarkIndex);
    } else {
      // Falls kein Fragezeichen, den ursprünglichen Link beibehalten
      this.shortenedLink = this.originalLink;
    }
  }

  clearInput(): void {
    this.originalLink = '';
    this.shortenedLink = '';
  }

  copyToClipboard(): void {
    this.clipboardService.copyFromContent(this.shortenedLink);
    this.showCopySuccess = true;
    
    // Nach 2 Sekunden die Erfolgsnachricht ausblenden
    setTimeout(() => {
      this.showCopySuccess = false;
    }, 2000);
  }
}

