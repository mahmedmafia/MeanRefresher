import { ApiService } from './../services/api.service';
import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  phoneNumber = '';
  apiResponse:any;
  isLoading=false;
  constructor(private apiServ: ApiService) { }

  ngOnInit(): void {
  }
  submit(f: NgForm) {
    console.log(f.value);
    this.isLoading=true;
    this.apiServ.postRequest(f.value.phoneNumber).subscribe(res =>{
      this.apiResponse = res
      this.isLoading=false;
    });
    f.reset();
  }

}
