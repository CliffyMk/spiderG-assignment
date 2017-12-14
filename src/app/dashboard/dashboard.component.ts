import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Constants } from '../core/constants/constant';
import { DashboardService } from './dashboard.service';
import "./dashboard.scss";
import { User } from '../shared/model/user';
import { LocalStorageService } from '../core/services/localstorage.service';
@Component({
  selector: 'dw-dashboard',
  templateUrl: 'dashboard.component.html',
  providers: [DashboardService]
})

export class DashboardComponent implements OnInit {
  newsList: any[];
  users: User[];
  showAddUserModal: boolean;
  showUserStatusModal: boolean;
  changeUserStatusId: string;
  userSearch: string;
  changeUserStatusName: string;
  changeUserStatusMode: string;
  constructor(private route: ActivatedRoute,
    private router: Router, private dashboardService: DashboardService,
    private localStorageService: LocalStorageService, private cdRef: ChangeDetectorRef) {
    this.newsList = [];
    this.users = new Array();
    this.showAddUserModal = false;
    this.showUserStatusModal = false;
    this.changeUserStatusId = "";
    this.userSearch = "";
    this.changeUserStatusName = '';
  }
  _showAddUserModal() {
    this.showAddUserModal = true;
  }
  ngOnInit(): void {
    // this.getNews();
    this.getUsersFromLocalStorage();

  }
  confirmChangeUserStatus() {
    if (this.users[this.changeUserStatusId].status === "false")
      this.users[this.changeUserStatusId].status = "true";
    else this.users[this.changeUserStatusId].status = "false";
    this.showUserStatusModal = false;
    this.updateUserInLocalStorage();
  }
  updateUserInLocalStorage() {
    this.localStorageService.set(Constants.USERSTORAGEKEY, this.users);
  }
  changeUserStatus(index: string, name: string, status: string) {
    this.changeUserStatusName = name;
    this.changeUserStatusMode = status;
    this.showUserStatusModal = !this.showUserStatusModal;
    this.changeUserStatusId = index;
  }
  closeAddUserModal() {
    this.showAddUserModal = false;
  }
  private getUsersFromLocalStorage() {
    this.users = this.localStorageService.get(Constants.USERSTORAGEKEY) || [];
  }
  addUser(user: User) {
    this.users.push(user);
    this.localStorageService.set(Constants.USERSTORAGEKEY, this.users);
  }
  getNews() {
    this.dashboardService.getNews().then((response) => {
      debugger;
      this.newsList = response.articles;
    });
  }
}

