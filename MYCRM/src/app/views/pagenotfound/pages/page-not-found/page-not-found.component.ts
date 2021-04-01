import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  public title: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.isConnected) {
      this.title = "Accueil"
    } else {
      this.title = "Se connecter"
    }
  }

  public redirectToOrdersOrLogin(): void {
    if (this.authService.isConnected) {
      this.router.navigate(['/orders']);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
