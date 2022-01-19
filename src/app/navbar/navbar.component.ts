import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  authStatus = this.authService.isAuth;

  ngOnInit(): void {}

  onSignin() {
    this.authService.isAuth = true;
    this.router.navigate(['/pl']);
  }
  onSignout() {
    this.authService.isAuth = false;
  }
}
