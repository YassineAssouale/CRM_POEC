import { Component, OnInit } from '@angular/core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-icon-connexion',
  templateUrl: './icon-connexion.component.html',
  styleUrls: ['./icon-connexion.component.scss']
})
export class IconConnexionComponent implements OnInit {

  public iconConnexion : any = faPowerOff;

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
  }
  public logOut(): void{

    //this.authService.user =null;
    console.log("log out");
    console.log(this.authService.user);

  }

}
