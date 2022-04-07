import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Output, OnInit, HostListener } from '@angular/core';
import { navbarData } from '../../common/data/nav-data';
import { SideNavToggle } from '../../common/data/nav-toggle'




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',  
        style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
        style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('600ms', 
          keyframes([
            style({transform: 'rotate(0deg)', offset:'0'}),
            style({transform: 'rotate(2turn)', offset:'1'})
          ])
        )
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {
 

  @Output() 
  onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData= navbarData;

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768 ) {
      this.collapsed = false; 
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    console.log(this.collapsed)
    console.log(this.screenWidth)
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  } 

  closeSidenav(): void {
    this.collapsed = false;
    console.log(this.collapsed)
    console.log(this.screenWidth)
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
  

}

