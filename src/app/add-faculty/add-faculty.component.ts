import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiFacultyService } from '../api-faculty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrl: './add-faculty.component.css'
})
export class AddFacultyComponent {
  constructor (private _api:ApiFacultyService, private _router:Router){}

  facultyForm : FormGroup = new FormGroup({
    FacultyName:new FormControl('',Validators.required),
    FacultySalary:new FormControl(0)
  });

  add(){
    // console.log(this.facultyForm.value);
    this._api.save(this.facultyForm.value).subscribe((res:any)=>{
      //console.log(res); shows date of created data and creates id i.e. proof that it is generated
      this._router.navigate(['/faculty'])
    });
  }
}
