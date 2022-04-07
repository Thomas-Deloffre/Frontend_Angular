import { Component } from '@angular/core';
import { User } from 'src/app/common/data/api-java-user-modele/user';
import { TokenStorageService } from './common/services/token-storage.service';
import { Router } from '@angular/router';
import { SideNavToggle } from 'src/app/common/data/nav-toggle'



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
  
  isSideNavCollapsed = false;
  screenWidth = 0;
  collapsed = false;
  

  
  onToggleSideNav(data: SideNavToggle | any):void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
    console.log(this.screenWidth)
    console.log(this.isSideNavCollapsed)
    
  }


}



