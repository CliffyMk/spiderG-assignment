import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/model/user';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'create-user',
    templateUrl: 'create-user.component.html'
})

export class CreateUserComponent implements OnInit {
    @Output() addUserEvent: EventEmitter<any> = new EventEmitter();
    @Output() closeAddUserModal: EventEmitter<any> = new EventEmitter();
    model: User;
    constructor() {
        this.model = new User();
    }
    closeAddUserModalFn() {
        this.closeAddUserModal.emit();
    }
    addUser() {
        this.addUserEvent.emit(this.model);
        this.closeAddUserModalFn();
    }
    ngOnInit() { }
}