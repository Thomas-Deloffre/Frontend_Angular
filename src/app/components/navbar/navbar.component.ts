import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from '../../common/data/nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() 
  onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidht = 0;
  navData= navbarData;


  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    console.log(this.collapsed)
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidht});
  } 

  closeSidenav(): void {
    this.collapsed = false;
    console.log(this.collapsed)
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidht});
  }
  

}
