import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ButtonDemo} from '@workly/design-system'

@Component({
  imports: [ RouterModule, ButtonDemo],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'workly';
}
