import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CollegeService } from 'src/app/services/college.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent 
{

  data;
  constructor(private _insert:CollegeService,private _formBuilder:FormBuilder,private _router:Router){}
  registrationForm=this._formBuilder.group(
   {
    'code':[''],
    'name':[''],
    'place':[''],
    'branches':['']
   }
  )
   getdata(msg)
   {
    this._insert.insertdata(msg.value).subscribe(
      (res)=>{
        console.log(res);
        this.data=res;
        this._router.navigate(['/all']);
      }
    )
   }

}
