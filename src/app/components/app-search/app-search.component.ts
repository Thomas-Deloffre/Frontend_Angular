import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/common/data/api-java-user-modele/user';
import { TokenStorageService } from 'src/app/common/services/token-storage.service';
import { UserService } from 'src/app/common/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailsComponent } from '../api-java-user/user-details/user-details.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';


@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent implements OnInit {

  user: User = new User();
  hasAdminRole = false;
  isLoggedIn: any = false;

  constructor(private tokenStorage: TokenStorageService,
    private userService: UserService,
    private router: Router,
    private modalService: NgbModal) {
  }

  ngOnInit(): void {

    this.tokenStorage.estConnecte.subscribe(isConnect => {
      // this.isLoggedIn = !!this.tokenStorage.getToken();
      this.isLoggedIn = !!this.tokenStorage.getUser();
      this.user = this.tokenStorage.getUser();
      if (isConnect) {
        if (this.user.isAdmin == true) {
          this.hasAdminRole = true;
        }
        if (this.user.isAdmin == false) {
          this.hasAdminRole = false;
        }
      }
    });
  }

  @Input()
  public titre: string = "default-title";

  
  reloadPage(): void {
    window.location.reload();
  }

  onLogout(): void {
    this.tokenStorage.signOut();
    this.isLoggedIn = false;
    // pb ici 
    this.router.navigate(['//']);
    // this.reloadPage();
  }

  onClick() {
    this.router.navigate(['']);
  }

  open() {
    const modalRef = this.modalService.open(UserDetailsComponent);
  }

  openAbout() {
    const modalRef = this.modalService.open(AboutmeComponent)
  }

  onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search])
  }


}
