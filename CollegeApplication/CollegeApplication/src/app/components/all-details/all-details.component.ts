import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeService } from 'src/app/services/college.service';

@Component({
  selector: 'app-all-details',
  templateUrl: './all-details.component.html',
  styleUrls: ['./all-details.component.css']
})
export class AllDetailsComponent 
{
  constructor(private _select:CollegeService,private _router:Router){}

  data
  searchfuction;
  isshow:boolean=true;
  ngOnInit()
  {
    this.getdata();
  }
    getdata()
    {
      this._select.selectdata().subscribe(
        (res)=>{
          console.log(res);
          this.data=res;
        }
      )
    }
    row(data1)
    {
      console.log(data1);
      this._router.navigate(['/select',data1])
    }

    update(data3)
    {
      console.log(data3)
      this._router.navigate(['/update',data3])
    }

    delete(data4)
    {
      console.log(data4);
      this._router.navigate(['/delete',data4]);
    }
    addrow()
    {
      this._router.navigate(['/insert']);
    }
    Searchdata(search)
    {
      this.isshow=false;
      this._select.selectrow(search.value).subscribe(
        (res1)=>{
          console.log(res1);
          this.searchfuction=res1;
        }
      )
    }

}
