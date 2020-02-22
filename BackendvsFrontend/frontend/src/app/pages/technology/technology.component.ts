import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Technology } from 'src/app/models/technology.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  public technology: Technology = {
    _id: '',
    name: '',
    description: '',
    logo: '',
    tags: [],
    updateAt: null,
    createdAt: null
  };

  constructor(private _activateRoute: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe(params => {
      const id: string = params["id"];
      this._httpService.getTechnology(id).subscribe((technology: Technology) => {
        this.technology = technology["data"];
      });
    });
  }

}
