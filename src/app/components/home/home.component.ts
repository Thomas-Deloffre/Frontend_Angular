import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { App } from 'src/app/common/data/api-herald_apps-nodejs/app';
import { APIResponse } from 'src/app/common/data/api-herald_apps-nodejs/appList';
import { User } from 'src/app/common/data/api-java-user-modele/user';
import { HttpService } from 'src/app/common/services/http.service';
import { TokenStorageService } from 'src/app/common/services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User = new User();
  isLoggedIn: any = false;
  roles: string[] = [];
  public sort!: string; 
  public apps!: Array<App>;

  constructor(private tokenStorageService: TokenStorageService, private httpService: HttpService, 
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.tokenStorageService.estConnecte.subscribe(isConnect => {
      this.isLoggedIn = isConnect;
      this.user = this.tokenStorageService.getUser();
    });



    if (this.tokenStorageService.getToken()) {
      this.user = this.tokenStorageService.getUser();
      this.isLoggedIn = !!this.tokenStorageService.getUser();
      this.roles = this.tokenStorageService.getUser().roles;
    }

    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['app-search']) {
          this.searchApps('rating' , params['app-search']);
      } else {
          this.searchApps('rating')
      }
  });
  }

  searchApps(sort: string, search?: string): void {
    this.httpService
    .getAppsList(sort, search)
    .subscribe((appList: APIResponse<App>) => {
        this.apps = appList.results;
        console.log(appList);
    });
}

}
