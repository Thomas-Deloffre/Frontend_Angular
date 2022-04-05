import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/data/api-java-user-modele/user';
import { TokenStorageService } from 'src/app/common/services/token-storage.service';
import { UserService } from 'src/app/common/services/user.service';
import { formatDate } from '@angular/common';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  public sort?: string;

  content?: string;
  user: User = new User();
  isLoggedIn = false;
  public isAdmin : boolean = false;
  public date : Date = new Date();

  constructor(private router: Router,
     private userService: UserService,
     private tokenStorageService: TokenStorageService,
     config: NgbCarouselConfig) {
      this.date = new Date();
      config.interval = 2800;
      config.keyboard = true;
      config.pauseOnHover = true;
     }
     
     

  ngOnInit(): void {
    this.user = this.tokenStorageService.getUser();
    this.isLoggedIn = true;
    if (this.user == null) {
      this.isLoggedIn = false;
      this.router.navigate(['/error-not-connecting']);
    }
    if (this.user.isAdmin == true) {
      this.isLoggedIn = true;
      this.router.navigate(['/dashboard-admin']);
    }
  }

  onClick(): void {
    this.router.navigate(['']);
  }
  
  onLogout(): void {
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
    this.reloadPage();
  }

  onEdit(user: any) : void {
    console.log(this.user.id);
    this.router.navigate(['dashboard-user/'+this.user.id]);
  }

  reloadPage(): void {
    window.location.reload();
    this.router.navigate(['']);
  }

  OnWalletSelect(): void {
    console.log(this.user.id);
    this.router.navigate(['wallet-list/'+this.user.id]);
  }

 /*  OnWalletClick(): void [
    
  ] */

}
