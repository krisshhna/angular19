import { FormBuilder, Validators } from "@angular/forms";

let onlyNumber = Validators.pattern(/^[0-9]+$/);
export function shopDetail(fb:FormBuilder){
    return fb.group({
        _id:        [''],
        name:       ['',[Validators.required]],
        address:    ['',[Validators.required]],
        gstNumb:    ['',[Validators.required]],
        allServ:    fb.array([])
    });
}

export function userDetail(fb:FormBuilder){
    return fb.group({
        name:       ['',[Validators.required]],
        email:      ['',[Validators.required]],
        password:   ['',[Validators.required]],
        gender:     ['',[Validators.required]],
        age:        ['',[Validators.required, onlyNumber]],
        phone:      ['',[Validators.required, onlyNumber]],
        address:    fb.array([addressDetail(fb)])
    })
}
export function addressDetail(fb:FormBuilder){
    return fb.group({
        street:     ['',[Validators.required]],
        state:      ['',[Validators.required]],
        city:       ['',[Validators.required]],
        location:   ['',[Validators.required]],
        pincode:    ['',[Validators.required, onlyNumber]],
    })
}

export function locationDetail(fb:FormBuilder){
    return fb.group({
        name:   ['',[Validators.required]],
        cities: fb.array([citiesDetail(fb)])
    })
}

export function citiesDetail(fb:FormBuilder){
    return fb.group({
        name:   ['',[Validators.required]],
    })
}

export function hotelDetail(fb:FormBuilder){
    return fb.group({
        name:       ['',[Validators.required]],
        location:   [''],
        email:      ['',[Validators.required]],
        ratings:    ['',[Validators.required, onlyNumber]],
        phone:      ['',[Validators.required, onlyNumber]],
        pincode:    ['',[Validators.required, onlyNumber]],
        per_night:  ['',[Validators.required, onlyNumber]],
        amenities:  [[ 1, 2, 3, 4, 99, 109]],
        cal:        [4],
        status:     ['Inactive'],
        userId:     [''],
    });
}