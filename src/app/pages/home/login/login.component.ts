import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public user: any = '';
  public password: any = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  public submit(): void {
    this.authService.post(this.user, this.password).subscribe(
      () => {
        this.router.navigate(['animals']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
