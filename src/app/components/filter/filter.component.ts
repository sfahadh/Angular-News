import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
  
export class FilterComponent implements OnInit {
  publisher: string;
  title: string; 
  @Output() publisherInput: EventEmitter<string> = new EventEmitter<string>();
  @Output() titleInput: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void { }

  sendPublisherInput(input: string) {
    this.publisherInput.emit(input);
  }

  sendTitleInput(input: string) {
    this.titleInput.emit(input);
  }
}
