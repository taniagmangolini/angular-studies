import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrl: './key-logger.component.css'
})
export class KeyLoggerComponent {
  //static property indicates whether the element we want to query will be available during component initialization
  @ViewChild('keyContainer', { static: true }) input: ElementRef | undefined;
  keys = '';

  ngOnInit(): void {
    //creates an observable from the DOM event of a native HTML element.
    const logger$ = fromEvent<KeyboardEvent>(this.input?.nativeElement, 'keyup');
    logger$.subscribe(evt => this.keys += evt.key);
  } 
}
