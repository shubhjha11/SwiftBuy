import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() length: number = 50;
  @Input() pageSize: number = 12;
  @Output() pageEventChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  public hidePageSize: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public handlePageEvent(event: any): void {
    console.log(event);
  }

}
