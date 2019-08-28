import { Component, OnInit } from '@angular/core';
import { IAuthor } from '@app/interfaces';
import { AuthorsService } from '@app/authors/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.sass']
})
export class AuthorsComponent implements OnInit {

  public authors: IAuthor[];
  public loading = false;

  constructor(private authorService: AuthorsService) { }

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

  }

}
