import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  // onSearch(newTag: string): void {
  onSearch(): void {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
