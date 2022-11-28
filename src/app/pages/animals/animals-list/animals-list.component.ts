import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Animals } from 'src/app/shared/models/animals.model';
import { AnimalsService } from 'src/app/shared/services/animals.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss'],
})
export class AnimalsListComponent implements OnInit {
  public animals$!: Observable<Animals>;
  constructor(
    private userService: UserService,
    private animalsService: AnimalsService
  ) {}

  public ngOnInit(): void {
    this.animals$ = this.userService.returnUser().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.animalsService.usersList(userName);
      })
    );
  }
}
