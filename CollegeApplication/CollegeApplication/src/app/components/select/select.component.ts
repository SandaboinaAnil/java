import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CollegeService } from 'src/app/services/college.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent 
{

  msg;
  res1;
  constructor(private _row:CollegeService,private _active:ActivatedRoute){}


  ngOnInit()
  {
      this._active.paramMap.subscribe((param:ParamMap)=>{
        this.res1=(param.get('code'))
      }

      )

      this._row.selectrow(this.res1).subscribe(
        (res)=>{
          console.log(res);
          this.msg=res;
        }
      )
      
  }
}
