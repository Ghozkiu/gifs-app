import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {}

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;
  search(): void {
    const value = this.txtSearch.nativeElement.value;

    if (value.trim().length === 0) return;

    this.gifsService.searchGifs(value);
    this.txtSearch.nativeElement.value = '';
  }
}
