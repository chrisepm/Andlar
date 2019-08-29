import { Component, OnInit } from '@angular/core';
import { IAuthor } from '@app/interfaces';
import { Router } from "@angular/router";
import { AuthorsService } from "@app/pages/authors/authors.service";
import { PublicationsComponent } from "@app/pages/publications/publications.component";
import { PublicationsService } from "@app/pages/publications/publications.service";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.sass'],
  providers: [ AuthorsService, PublicationsComponent, PublicationsService ]
})
export class AuthorsComponent implements OnInit {

  public authors: IAuthor[];
  public loading = false;

  constructor(private authorService: AuthorsService,
              private publicationComponent: PublicationsComponent,
              private _router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.authorService.getAuthors().subscribe(result => {
      this.loading = false;
      this.authors = result.data;
    }, (err) => {
      this.loading = false;
      console.log(err);
    });
  }

  onClick(id: string) {
    this._router.navigate(['/author/', id]);
  }

}
