import { Component } from '@angular/core';
import { ApiFacultyService } from '../api-faculty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {
  
  Faculty = [{"FacultyName":"", "FacultySalary":0, "FacultyDepartment":"", "FacultyImage":"",  "id":""}]

  constructor(private _api:ApiFacultyService, private _router:Router){}

  ngOnInit(){
    this._api.getAll().subscribe((res:any)=>{
      this.Faculty = res;
    })
  }

  delete(id:any){
    this._api.delete(id).subscribe((res:any)=>{
      this.ngOnInit();
    })
  }

  detail(id:any){
    this._router.navigate(["/faculty/",id]);
  }

}
