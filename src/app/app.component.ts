import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private _router:Router){

  }
  title = 'API';

  logout(){
    localStorage.removeItem('user');
    this._router.navigate(['/login']);
  }
}
