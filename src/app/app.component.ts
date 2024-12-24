import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  template: '<app-header/>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crashcourse';
}
