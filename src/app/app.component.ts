import { Component, Inject } from '@angular/core';
import { APP_CONFIG, appSettings, AppConfig } from './shared/interfaces/configs.interface'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    { provide: APP_CONFIG, useValue: appSettings }
  ]
})
export class AppComponent {
  title = 'my-app';

  //When we define an observable variable, we tend to append the $ sign to the variable name
  //Observables return a stream of events
  //This stream can combine many operations before hitting observers subscribed to it. Ex map or filter
  //Reactive programming entails applying asynchronous subscriptions and transformations to observable streams of events.
  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

  constructor(@Inject(APP_CONFIG) config: AppConfig) {
    //An observable will not do anything unless a subscriber subscribes to it.
    //subscribe to the title$ observable and get notified of any change
    this.title$.subscribe(this.setTitle); 
  }

  private setTitle = () => {
    const timestamp = new Date().getMilliseconds();
    this.title = `Learning Angular (${timestamp})`;
  }
}
