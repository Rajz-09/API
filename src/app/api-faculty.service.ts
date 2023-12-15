import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Faculty } from './DAO/Faculty';

@Injectable({
  providedIn: 'root'
})
export class ApiFacultyService {
  apiURL="https://64e617d409e64530d17f92d8.mockapi.io/Faculty";

  constructor(private _http:HttpClient) { }

  getAll(){
    return this._http.get(this.apiURL)
  }

  getById(id:any){
    return this._http.get(this.apiURL+"/"+id);
  }

  delete(id:any){
    return this._http.delete(this.apiURL+"/"+id);
  }

  save(data:Faculty){
    return this._http.post(this.apiURL,data);
  }

}
