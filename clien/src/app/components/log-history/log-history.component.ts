import { Component, OnInit } from '@angular/core';
import { apiResponse } from '../form/models/apiResponse';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-log-history',
  templateUrl: './log-history.component.html',
  styleUrls: ['./log-history.component.css']
})
export class LogHistoryComponent implements OnInit {
  displayedColumns: string[] = ['number', 'valid','local_format', 'international_format', 'country_prefix', 'country_code', 'country_name', 'location','carrier','line_type','date_created'];
  dataSource: any = [];
  isLoading=false;
  // _id: string,
  //   valid: Boolean,
  //   number: string,
  //   local_format: string,
  //   international_format: string,
  //   country_prefix: string,
  //   country_code: string,
  //   country_name: string,
  //   location: string,
  //   carrier: string,
  //   line_type: string,
  //   date_created: Date,

  constructor(private apiServ: ApiService) { }
  responses: apiResponse[] = [];
  ngOnInit(): void {
    this.isLoading=true;
    this.apiServ.getRequest().subscribe(res => {
      this.responses = res;
      this.dataSource = this.responses;
      this.isLoading=false;
    })
  }

}
