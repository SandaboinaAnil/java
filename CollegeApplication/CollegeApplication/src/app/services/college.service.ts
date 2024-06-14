import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CollegeService {
  insert_url="http://localhost:8080/";
  constructor(private _http:HttpClient) { }

  insertdata(data):Observable<any>
  {
    return this._http.post(this.insert_url,data);
  }


  select_url="http://localhost:8080/"

  selectdata():Observable<any>
  {
    return this._http.get(this.select_url);
  }

  delete_url="http://localhost:8080/"

  deletedata(del):Observable<any>
  {
    return this._http.delete(this.delete_url+del,{responseType:"text"});
  }

  selectRow_url="http://localhost:8080/"

  selectrow(d):Observable<any>
  {
    return this._http.get(this.selectRow_url+d);
  }


  update_url="http://localhost:8080/"

  updateRow(msg):Observable<any>
  {
    return this._http.post(this.update_url,msg);
  }
}
