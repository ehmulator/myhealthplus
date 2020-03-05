import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/userservice.service';

@Component({
  templateUrl: './add-user.component.html'
})

export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  title: string = "Create";
  userId: number;
  errorMessage: any;
  userGroupList: Array<any> = [];

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _userService: UserService, private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.userId = this._avRoute.snapshot.params["id"];
    }

    this.userForm = this._fb.group({
      userId: 0,
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      address: '',
      userGroupId: ['', [Validators.required]],
      userGroup: ''
    })
  }

  ngOnInit() {
    this._userService.getUserGroups().subscribe((data) => {
      this.userGroupList = data
    })

    if (this.userId > 0) {
      this.title = "Edit";
      this._userService.getUserById(this.userId)
        .subscribe((resp) => {
          debugger;
          this.userForm.setValue(resp);
        }, (error) => {
          this.errorMessage = error;
        });
    }

  }

  save() {
    debugger
    if (!this.userForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this._userService.saveUser(this.userForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-user']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {
      this._userService.updateUser(this.userForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-user']);
        }, error => this.errorMessage = error)
    }
  }

  cancel() {
    this._router.navigate(['/fetch-user']);
  }

  get firstName() { return this.userForm.get('firstName'); }
  get lastName() { return this.userForm.get('lastName'); }
  get address() { return this.userForm.get('address'); }
  get username() { return this.userForm.get('username'); }
  get password() { return this.userForm.get('password'); }
  get userGroupId() { return this.userForm.get('userGroupId'); }
}
