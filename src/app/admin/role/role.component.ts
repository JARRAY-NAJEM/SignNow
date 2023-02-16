import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { UpdateRoleComponent } from '../update-role/update-role.component';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from './liste';
import { MatPaginator } from '@angular/material/paginator';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
})
export class RoleComponent implements OnInit {
  myRole: any = [];

  displayedColumns: any[] = [
    'demo-ID',
    'demo-role',
    'demo-rolecode',
    'demo-action',
    'demo-delete',
  ];
  // dataSource = ELEMENT_DATA;
  tableperiode: PeriodicElement[] = [
    // { role: 'ADMIN', ID:1111 },
    // { role: 'CLIENT', ID: 1010 },
  ];
  dataSource = new MatTableDataSource<PeriodicElement>();
  status: string | undefined;

  constructor(
    public addDialog: MatDialog,
    public editDialog: MatDialog,
    private getapi: ApiDataService
  ) {
    this.dataSource = new MatTableDataSource(this.tableperiode);
  }

  addUser() {
    const dialogRef = this.addDialog.open(UpdateRoleComponent, {
      data: { action: 'creates' },
    });
    // console.log('The dialog was opned');

    //  dialogRef.afterClosed().subscribe((result : any) => {
    //   console.log(result,"result",this.dataSource);
    // //  console.log('The dialog was closed');
    // result.ID= Math.floor(Math.random() *9999);
    // this.tableperiode.push(result.user)

    // this.dataSource =new MatTableDataSource(this.tableperiode)
    //   console.log( this.tableperiode);
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result, 'result', this.dataSource);
      result.user.ID = Math.floor(Math.random() * 9999);
      this.tableperiode.push(result.user);
      this.dataSource = new MatTableDataSource(this.tableperiode);
      console.log(this.tableperiode);
    });
  }

  ngOnInit(): void {
    this.getDataNow();
    // this.delDataNow();
  }

  editRole(element: PeriodicElement) {
    const dialogRef = this.editDialog.open(UpdateRoleComponent, {
      data: {
        element: element,
        action: 'edit',
      },
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log('The dialog was closed');
    // });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result, 'result', this.dataSource);
      let index = this.tableperiode.findIndex(
        (item: PeriodicElement) => item.ID == result.user.ID
      );
      //   console.log(index);

      console.log(index, 'index');
      if (index > -1) {
        this.tableperiode[index] = result.user;
        this.dataSource = new MatTableDataSource(this.tableperiode);
      }
    });
  }
  //!delete row from table with index

  delete(index: number) {
    const data = this.dataSource.data;
    data.splice(index, 1);
    console.log('delete index ' + index);

    this.dataSource.data = data;
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  options: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getDataNow() {
    this.getapi.getdataRole().subscribe((res) => {
      this.myRole = res;
    });
  }
  // delDataNow() {
  //   this.getapi.deldataUser().subscribe((res) => console.log(res));
  // }
  // deleterolenow(){
  //   this.getapi.deleterole().subscribe(res => console.log(res))
  // }
}
