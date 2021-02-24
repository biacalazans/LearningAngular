import { Component } from '@angular/core';
import { NavbarComponent } from '../app/navbar/navbar.component';

function log(target: any, name: any, descriptor: any) {
  console.log(target, name, descriptor);

  const original = descriptor.value;

  descriptor.value = function () {
    console.log('função hackeada');
  };

  return descriptor;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learningAngular';

  constructor() {
    this.aSimpleMethod();
  }

  @log
  aSimpleMethod() {
    console.log('hello');
  }
}
