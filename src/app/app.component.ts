import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from "./pages/products-list/products-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  template: `<app-header/><!--ESTE COMPONENTE AL SER ESTATICO ESTARA PRESENTE EN TODDAS TUS VISTAS-->
  <router-outlet/>`,//REMPLAZARA POR EL COMPONENETE QUE SE ESPECIFICO EN APP.ROUTES, EN ESTE CASO Products-list
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crashcourse';
}
