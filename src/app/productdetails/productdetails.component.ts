import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductdetailsComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
}