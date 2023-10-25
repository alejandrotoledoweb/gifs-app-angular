import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  public tagsHistory: string[] = [];
  constructor(private gifsService: GifsService) {}

  get allTagsHistory(): string[] {
    return this.gifsService.tagsHistory;
  }

  public searchTag(tag: string): void {
    console.log(tag);
    this.gifsService.searchTag(tag!);
  }
}
