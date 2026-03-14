import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
   
  protected readonly title = signal('Car_Rental_System');

   ngOnInit(): void {
    initFlowbite();
  }
  
}



function initFlowbite() {
  throw new Error('Function not implemented.');
 }

