import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username!: string;
  public password!: string;
  public loginForm!: UntypedFormGroup;
  constructor(
    private fb: UntypedFormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null],
      password: [null]
    })
  }

  public onSubmit(): void {

  }

}
