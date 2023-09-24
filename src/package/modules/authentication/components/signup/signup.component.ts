import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signUpForm!: UntypedFormGroup;
  constructor(
    private fb: UntypedFormBuilder
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: [''],
      email: [''],
      password: [''],
      confirmPassword: ['']
    })
  }

}
