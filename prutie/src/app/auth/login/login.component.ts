import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import * as firebase from "firebase";
import {Router} from "@angular/router";
import {NotificationService} from "../../shared/notification.service";
import {MyFireService} from "../../shared/myfire.service";
import {UserService} from "../../shared/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private notifier: NotificationService, private myFire: MyFireService, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }
  onSubmit(form : NgForm){
    console.log('submit fired')
    const email = form.value.email;
    const password = form.value.password;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(userDataFromDatabase => {
        if (userDataFromDatabase) {
          this.notifier.display("success", "Successfully logged in.");
          this.userService.set(userDataFromDatabase);

          this.router.navigate(['home', ]);
        }
      })
      .catch(err => {
        this.notifier.display('error', err.message);
      });
  }
}
