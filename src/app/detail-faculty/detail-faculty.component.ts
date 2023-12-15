import { Component } from '@angular/core';
import { ApiFacultyService } from '../api-faculty.service';
import { Faculty } from '../DAO/Faculty';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-faculty',
  templateUrl: './detail-faculty.component.html',
  styleUrl: './detail-faculty.component.css'
})
export class DetailFacultyComponent {
  constructor (private _api:ApiFacultyService, private _activatedRoute:ActivatedRoute){}

  faculty1:Faculty = new Faculty();

  id:number = 0;

  ngOnInit(){
    this.id = this._activatedRoute.snapshot.params['id'];
    this._api.getById(this.id).subscribe((res:any)=>{
      this.faculty1 = res;
    })
  }
}
