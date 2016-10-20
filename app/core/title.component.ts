import { Component, Input } from '@angular/core';
import { UserService } from './user.service'

@Component({
  moduleId: module.id,
  selector: 'app-title',
  templateUrl: 'title.component.html',
})
export class TitleComponent {
  @Input() subtitle = '';
  user = '';
  showHeading = true;
  title = 'Tour of Heroes';

  constructor(private userService: UserService) {
      this.user = userService.userName;
  }

  toggleHeading() {
      this.showHeading = !this.showHeading;
  }
}
