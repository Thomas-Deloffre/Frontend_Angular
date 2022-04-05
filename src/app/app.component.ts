import { Component } from '@angular/core';
import { User } from 'src/app/common/data/api-java-user-modele/user';
import { TokenStorageService } from './common/services/token-storage.service';
import { Router } from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Herald, the Appstore Intelligence';
  user: User = new User();

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
  }
  
  isSideNavColapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: any):void {
    this.screenWidth = data.screenWidth;
    this.isSideNavColapsed = data.collapsed;
    console.log(this.screenWidth)
    console.log(this.isSideNavColapsed)
    
  }


}

