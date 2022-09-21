import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public user: any = '';
  public password: any = '';

  constructor() {}

  ngOnInit(): void {}

  public submit(): void {
    console.log(this.user, this.password);
  }
}