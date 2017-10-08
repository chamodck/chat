import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
    ]
})
export class EqualValidator implements Validator {
    constructor( @Attribute('validateEqual') public validateEqual: string
       ) {

    }
    validate(c: AbstractControl): { [key: string]: any } {
        if(c.value){
            let self = c.value.trim();
            let e = c.root.get(this.validateEqual);

            //console.log(c.value);
            if(e.value){
                let other =e.value.trim();
                if(self!='' && other!=''){
                    if(self===other){
                        if(e.errors['validateEqual']!=null){ delete e.errors['validateEqual'];}
                        if(c.errors['validateEqual']!=null){ delete c.errors['validateEqual'];}
                        
                        if (!Object.keys(e.errors).length) e.setErrors(null);
                        if (!Object.keys(c.errors).length) c.setErrors(null);
                    }else{
                        return { validateEqual: { valid: false } };
                    }
                }
            }
        }
    }
   
}

