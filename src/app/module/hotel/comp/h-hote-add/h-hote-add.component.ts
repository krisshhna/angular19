import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { addressDetail, citiesDetail, hotelDetail, locationDetail, userDetail } from '../../../../common/forms/formSchema';
import { UserService } from '../../../../service/user.service';
import { SettingService } from '../../../../service/setting.service';
import { HotelService } from '../../../../service/hotel.service';
import { concat, concatMap, from, map } from 'rxjs';

@Component({
  selector: 'app-h-hote-add',
  standalone: false,
  templateUrl: './h-hote-add.component.html',
  styleUrl: './h-hote-add.component.css'
})
export class HHoteAddComponent {
  constructor(public _user:UserService, public _setting:SettingService, public _hotel:HotelService){}

  fb = inject(FormBuilder);
  allDetail = this.fb.group({
    user:userDetail(this.fb),
    location:locationDetail(this.fb),
    hotel:hotelDetail(this.fb)
  });

  get address(){
    return this.allDetail.get('user.address') as FormArray;
  }
  
  addAddress(){
    return this.address.push(addressDetail(this.fb));
  }

  removeItem(id:number){
    this.address.removeAt(id);
  }

  get cities(){
    return this.allDetail.get('location.cities') as FormArray;
  }

  addCities(){
    return this.cities.push(citiesDetail(this.fb));
  }

  submitRecord(){
    let data = this.allDetail.value;
    from(this._user.createUser(data.user)).pipe(
      concatMap((user:any)=>
        this._setting.createLocation(data.location).pipe(
          map((location:any)=>({
             userId: user.result,
            location: location.result._id
          }))
        )
      ),
      concatMap(({userId, location})=>{
        console.log(userId, location);
        let allHotel = {...data.hotel, userId, location};
        console.log(allHotel);
        return this._hotel.create(allHotel);
      })
    ).subscribe({
      next:(res=>{
        console.log(`All the values are inserted in different api ${res}`);
      }),
      error:(err=>{
        console.log(`Error record ${err}`);
      })
    })
  }
}
