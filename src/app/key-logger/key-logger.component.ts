import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { fromEvent, of, from, tap, map, filter, Subscription } from 'rxjs'; //operators

  // other operators:
  // - takeUntil: unsubscribes from an observable when it completes. In templates, you can use async pipe. You can also unsubscribe manually.
  //Observables that operate on other observables of observables are called higher-order observables. Ex. switchMap/mergeMap
  // - switchMap operator takes an observable as a source and applies a given function to each item, returning an inner observable for each one. Only the last emission is processed
  // - mergeMap: all emissions are processed until completition, but the order is not kept.
  // - concatMap: all emissions are processed until completition, but sequentialy

  //a particular type of observable called Subject, which extends an Observable object as it is both an observer and an observable. 
  //It can emit values to multiple observers, whereas an Observable object unicasts only to one observer at a time.

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrl: './key-logger.component.css'
})
export class KeyLoggerComponent implements OnInit,  OnDestroy {

  //static property indicates whether the element we want to query will be available during component initialization
  @ViewChild('keyContainer', { static: true }) input: ElementRef | undefined;
  keys = '';

  ngOnInit(): void {
    //creates an observable from the DOM event of a native HTML element.
    const logger$ = fromEvent<KeyboardEvent>(this.input?.nativeElement, 'keyup');

    //logger$.subscribe(evt => this.keys += evt.key);

    //The pipe operator is used to link and combine multiple operators separated by commas (ex. tap)
    logger$.pipe(
      map(evt => evt.key.charCodeAt(0)),
      filter(code => (code > 31 && (code < 48 || code > 57)) === false),
      tap(digit => this.keys += String.fromCharCode(digit)) // tap operator is used when we want to do something with the data emitted without modifying it
    ).subscribe();

    this.testOfOperator();
    this.testFromOperator();
  } 

  testOfOperator() {
    //The of operator is used to create an observable from values such as numbers
    //It will print the numbers in sequence
    const values = of(1, 2, 3);
    values.subscribe(value => console.log('of ' + value));
  }

  testFromOperator() {
    // is used to convert an array or a promises or a callback to an observable
    const values = from([1, 2, 3])
    values.subscribe(value => console.log('from ' + value));
  }

  ngOnDestroy() {
    // If we do not tell the observer to unsubscribe at some point and clean up any resources, the subscription to the observable will possibly lead to a memory leak.
  }
}
