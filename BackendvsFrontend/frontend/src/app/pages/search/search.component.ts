import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Technology } from 'src/app/models/technology.model';
import { TechnologyComponent } from '../technology/technology.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  technologies: Technology[] = [];
  query: string;

  constructor(private _activeRoute: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(params => {
      this.query = params["query"];
      this._httpService.searchTecnology(this.query).subscribe((technologies: Technology[]) => {
        this.technologies = technologies["data"];
      });
    });
  }

}
