import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CollegeService } from 'src/app/services/college.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent 
{
  msg;
  res1;
  constructor(private _update:CollegeService,private _active:ActivatedRoute,private _router:Router){}

  ngOnInit()
  {
      this._active.paramMap.subscribe((param:ParamMap)=>{
        this.res1=(param.get('code'))
      }
      )
      this._update.selectrow(this.res1).subscribe(
        (res)=>{
          console.log(res);
          this.msg=res;
        }
      ) 
  }
  edit(data)
  {
    this._update.insertdata(data.value).subscribe(
      (res2)=>{
        console.log(res2);
        this._router.navigate(['/all']);
      }
    )
  }

}
