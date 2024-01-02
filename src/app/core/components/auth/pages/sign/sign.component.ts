import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

   

  constructor(private formBuilder: FormBuilder) { }

 public formAuth: FormGroup = this.formBuilder.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required]]
 })
  
 public submitForm () {
  if(this.formAuth.valid) {
    console.log(this.formAuth);
  }

 }


  ngOnInit(): void {
  }

}
