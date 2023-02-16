import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiDataService } from 'src/app/services/api-data.service';
import { PeriodicElement } from './listeUser';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements AfterViewInit , OnInit {
  options: any;

  ngOnInit()  {
    this.getDataNow()
    this.myUser
    console.log(this.myUser);

  }


  displayedColumns: string[] = ['id', 'Nom', 'Prenom','Email', 'Num','identite' ];
 dataSource = new MatTableDataSource<PeriodicElement>();

    constructor(
    private getapi: ApiDataService) {

  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option: string) => option.toLowerCase().includes(filterValue));
  }
    applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
// login(){
//   this.apiservices.login().subscribe(res => console.log(res))
// }

myUser: any=[];
getDataNow() {
  this.getapi.getdataUser().subscribe((res) => {
    this.myUser = res;
  });
}


}



