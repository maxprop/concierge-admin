import { Component, OnInit, ViewChild } from '@angular/core';
import { FormioResourceIndexComponent } from 'angular-formio/resource';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { Router } from '@angular/router';
import { GridOptions, IDatasource, IGetRowsParams } from 'ag-grid-community';


import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  title = 'my-app';
  public data = [];
  public res: string[] = [];

  columnDefs = [
    { headerName: 'Email', width: 120 ,field: 'email', filter: 'agTextColumnFilter', },
    { headerName: 'Name', width: 120 ,field: 'fullName', filter: 'agTextColumnFilter', },

  ];


  rowData: any;
  

  constructor(private http: HttpClient, private router: Router) {

  }

  gridOptions: {
    // enables pagination in the grid
    pagination: true,

    // sets 10 rows per page (default is 100)
    paginationPageSize: 10,

    // other options
}

onRowClicked(event) {
    this.router.navigate([`/contacts/${event.data.id}/view`]);
  }

  newListing(){
    this.router.navigate([`/contacts/new`]);
  }
  ngOnInit() {
    let headers = new HttpHeaders().set('x-token', 'seAu4yf9Dhj0DQWKNemssni9pxDYMP')
      .set('content-type', 'application/json');

    this.http
      .get<any[]>('https://ooba-digitaloffice.form.io/contact/submission?sort=-created&skip=0&limit=1000', { headers })
      .subscribe((res) => {
        res.forEach(element => {
          return this.data.push({
            "email": element.data.email,
            "fullName": element.data.fullName,
            "id": element._id
          });
        });
        this.rowData = this.data;
      })
  }


}

