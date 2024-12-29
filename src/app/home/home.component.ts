import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public router:Router)
  {

  }
  login()
  {
    this.router.navigateByUrl('login');
  }
  signup()
  {
    this.router.navigateByUrl('signup');
  }
}