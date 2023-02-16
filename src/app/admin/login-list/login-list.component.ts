import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiDataService } from 'src/app/services/api-data.service';
import { PeriodicElement } from './listeHistory';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.css'],
})
export class LoginListComponent implements AfterViewInit {
  displayedColumns: string[] = ['Email', 'loginDate', 'logoutdate'];

  tableperiode: PeriodicElement[] = [
    { Email: 'Hydrogen', loginDate: 'a', logoutdate: 'a' },
    { Email: 'Helium', loginDate: 'a', logoutdate: 'a' },
    { Email: 'Lithium', loginDate: 'a', logoutdate: 'a' },
    { Email: 'Beryllium', loginDate: 'a', logoutdate: 'a' },
    { Email: 'Boron', loginDate: 'a', logoutdate: 'a' },
  ];

  dataSource = new MatTableDataSource<PeriodicElement>();

  constructor(private getapi: ApiDataService) {
    this.dataSource = new MatTableDataSource(this.tableperiode);
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  options: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option: string) =>
      option.toLowerCase().includes(filterValue)
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
   // this.getDataNow();
  }
  // getDataNow() {
  //   this.getapi.getdata().subscribe((res) => console.log(res));
  // }
}
