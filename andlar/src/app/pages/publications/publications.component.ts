import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IPublication } from '@app/interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { ActivatedRoute } from "@angular/router";
import { PublicationsService } from "@app/pages/publications/publications.service";

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.sass'],
  providers: [ PublicationsService ]
})
export class PublicationsComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  public displayedColumns: string[] = ['title', 'body', 'date', 'time', 'name', 'email'];
  public dataSource: any;
  public publications: IPublication[];
  public sortedData: IPublication[];
  public loading = false;

  constructor(private publicationService: PublicationsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params.id && params.id !== '0') {
        this.dataSource = new MatTableDataSource<IPublication>([]);
        this.loading = true;
        this.publicationService.getPublicationByAuthorId(params.id).subscribe(result => {
          this.loading = false;
          this.publications = result.data;
          this.dataSource = new MatTableDataSource<IPublication>(result.data);
          this.dataSource.paginator = this.paginator;
        }, (err) => {
          this.loading = false;
          console.log(err);
        });
      } else {
        this.loading = true;
        this.publicationService.getPublications().subscribe(result => {
          this.loading = false;
          this.publications = result.data;
          this.dataSource = new MatTableDataSource<IPublication>(result.data);
          this.dataSource.paginator = this.paginator;
        }, (err) => {
          this.loading = false;
          console.log(err);
        });
      }
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  sortData(sort: Sort) {
    const data = this.publications.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'date':
          return this.compare(a.date, b.date, isAsc);
        default:
          return null;
      }
    });

    this.dataSource = new MatTableDataSource<IPublication>(this.sortedData);
    this.dataSource.paginator = this.paginator;
  }

  private compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
