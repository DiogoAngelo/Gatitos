import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public user = this.userService.returnUser();

  public logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
