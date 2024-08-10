import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/features/auth/models/user.model';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'app-narbar',
  templateUrl: './narbar.component.html',
  styleUrls: ['./narbar.component.css'],
})
export class NarbarComponent implements OnInit {

  user?:User;
  constructor(private authService:AuthService,
    private router:Router
  ) {
    
  }
  ngOnInit(): void {
    this.authService.user()
    .subscribe({
      next:(response)=>{
        this.user = response;
      }
    });

    this.user= this.authService.getUser();
  }


  onLogout():void{
    this.authService.logOut();
    this.router.navigateByUrl('/');
  }

}
