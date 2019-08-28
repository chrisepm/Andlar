import { Component, OnInit } from '@angular/core';
import { AuthorsService } from "./authors/authors.service";
import { PublicationsService } from "./publications/publications.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [ AuthorsService, PublicationsService ]
})
export class AppComponent implements OnInit {
  title = 'Andlar Project';

  constructor() {}

  ngOnInit() {

  }

  onClick(id: string) {
    // this.dataSource = new MatTableDataSource<IPublication>([]);
    // this.loading2 = true;
    // this.publicationService.getPublicationByAuthorId(id).subscribe(result => {
    //   this.loading2 = false;
    //   this.dataSource = new MatTableDataSource<IPublication>(result.data);
    //   this.dataSource.paginator = this.paginator;
    // }, (err) => {
    //   this.loading2 = false;
    //   console.log(err);
    // });
  }
}
