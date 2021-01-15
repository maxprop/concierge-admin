import { Component, OnInit, ViewChild } from '@angular/core';
import { FormioResourceIndexComponent } from 'angular-formio/resource';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common'
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
    { headerName: 'Name', width: 220, field: 'fullName', filter: 'agTextColumnFilter', sortable: true },
    { headerName: 'Status', width: 160, field: 'contactStatus', filter: 'agTextColumnFilter', sortable: true },
    { headerName: 'Assigned To', width: 160, field: 'assignedTo', filter: 'agTextColumnFilter', sortable: true },
    { headerName: 'Email', width: 200, field: 'email', filter: 'agTextColumnFilter', sortable: true },
    { headerName: 'Mobile', width: 120, field: 'mobile', filter: 'agTextColumnFilter', sortable: true },
    //  { headerName: 'Primary Suburb', width: 240, field: 'primarySuburb', filter: 'agTextColumnFilter', sortable: true },
    {
      headerName: 'Updated', width: 120, field: 'lastUpdated', filter: 'agDateColumnFilter', sortable: true,
      //    cellRenderer: (data) => {
      //     return data.value ? (new Date(data.value)).toLocaleDateString() : '';
      // }
    },
    {
      headerName: 'Follow Up Date', width: 150, field: 'followUpDate', filter: 'agDateColumnFilter',
      //   cellRenderer: (data) => {
      //     return data.value ? (new Date(data.value)).toLocaleDateString() : '';
      // },
      sortable: true
    },
    {
      headerName: 'Created', width: 120, field: 'createdTime', filter: 'agDateColumnFilter', sortable: true,
      //   cellRenderer: (data) => {
      //     return data.value ? (new Date(data.value)).toLocaleDateString() : '';
      // }
    },
    { headerName: 'Existing Property Sale	', width: 120, field: 'existingPropertySale	', filter: 'agTextColumnFilter', sortable: true },

    { headerName: 'Recommend Agency', width: 150, field: 'recommendAgency', filter: 'agTextColumnFilter', sortable: true },
    { headerName: 'House Currently On Market', width: 160, field: 'houseCurrentlyOnMarket', filter: 'agTextColumnFilter', sortable: true },

    { headerName: 'Home Loan Qualification', width: 160, field: 'homeLoanQualificationAmount', filter: 'agNumberColumnFilter', },
  ];


  rowData: any;


  constructor(private http: HttpClient, private router: Router, public datepipe: DatePipe) {

  }

  gridOptions: {
    // enables pagination in the grid
    pagination: true,

    // sets 10 rows per page (default is 100)
    paginationPageSize: 20,

    // other options
  }

  onRowClicked(event) {
    this.router.navigate([`/contacts/${event.data.id}/view`]);
  }

  newListing() {
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
            "fullName": element.data.fullName,
            "contactStatus": element.data.contactStatus,
            "homeLoanQualificationAmount": element.data.homeLoanQualificationAmount,
            "assignedTo": element.data.assignedTo ? element.data.assignedTo.data.firstName + " " + element.data.assignedTo.data.lastName : '',
            "email": element.data.email,
            "mobile": element.data.mobile,
            "lastUpdated": element.data.lastUpdated?this.datepipe.transform(element.data.lastUpdated, 'd/M/yy, h:mm a'):'',
            "followUpDate": element.data.followUpDate?this.datepipe.transform(element.data.followUpDate, 'd/M/yy, h:mm a'):'',
            "recommendAgency": element.data.recommendAgency,
            "existingPropertySale	": element.data.existingPropertySale,
            "houseCurrentlyOnMarket": element.data.houseCurrentlyOnMarket,
            //    "primarySuburb": element.data.primarySuburb ? element.data.suburb:'',
            "createdTime": element.data.createdTime?this.datepipe.transform(element.data.createdTime, 'd/M/yy, h:mm a'):'',
            "id": element._id
          });
        });
        this.rowData = this.data;
      })
  }


}

