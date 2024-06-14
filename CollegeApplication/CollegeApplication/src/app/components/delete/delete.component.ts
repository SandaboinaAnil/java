import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CollegeService } from 'src/app/services/college.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent 
{

  msg;
  res1;
  constructor(private _delete:CollegeService,private _active:ActivatedRoute,private _router:Router){}

  ngOnInit()
  {
    this._active.paramMap.subscribe((param:ParamMap)=>{
      this.res1=(param.get('code'))
    }
    )
    this._delete.deletedata(this.res1).subscribe(
      (res)=>{
        console.log(res);
        this.msg=res;
        this._router.navigate(['/all']);
      }
    )
  }

}
