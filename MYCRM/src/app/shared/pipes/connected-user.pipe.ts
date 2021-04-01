import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Pipe({
  name: 'connectedUser'
})
export class ConnectedUserPipe implements PipeTransform {


 constructor(private authService : AuthService){

 }
  transform(value: string, ...args: string[]): string {
    if(this.authService.user.username === value) {
      return value +' (connecté)';
    } else {
      return value;
    }
  }

}


