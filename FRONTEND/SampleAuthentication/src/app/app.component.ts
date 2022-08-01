import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  user: SocialUser | null; 

  constructor(private authService: SocialAuthService, private http: HttpClient) 
  { 
    this.user = null;
    this.authService.authState.subscribe((user: SocialUser) => {
      console.log(user);
      if (user) {
        this.http.post<any>('https://localhost:5001/api/user/authenticate', { idToken: user.idToken }).subscribe((authToken: any) => {
        console.log(authToken);
        localStorage.setItem("jwt", authToken.authToken); 
         })		  
      }
      this.user = user;
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((x: any) => console.log(x));
  }

  signOut(): void {
    this.authService.signOut();
  }  

  isLogged():boolean {
    const token = localStorage.getItem("jwt");
    return token != undefined;
  }
}
