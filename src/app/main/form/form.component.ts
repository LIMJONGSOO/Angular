import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidator } from './password-validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userForm: FormGroup;
  formBuilderUserForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      userid: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]{4,10}')
      ]),
      passwordGroup: new FormGroup({
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
      }, PasswordValidator.match)
    });

    this.formBuilderUserForm = this.fb.group({
      userid: ['', [
        Validators.required,
        Validators.pattern('[0-9]{4,8}')
      ]],
      passwordGroup: this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, { validator: PasswordValidator.match }),
      hobbies: this.fb.array(['', ''])
    });
  }
}
