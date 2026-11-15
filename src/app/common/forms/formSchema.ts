import { FormBuilder, Validators } from "@angular/forms";

export function shopDetail(fb:FormBuilder){
    return fb.group({
        _id:        [''],
        name:       ['',[Validators.required]],
        address:    ['',[Validators.required]],
        gstNumb:    ['',[Validators.required]],
        allServ:    fb.array([])
    });
}