import { Directive, forwardRef,Attribute } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';





@Directive({
  selector: '[validateEqual][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: JuriNameValidator, multi: true }
  ]
})
export class JuriNameValidator implements Validator {
  validator: ValidatorFn;
  
  constructor(@Attribute('validateEqual') public validateEqual: string) {
    this.validator = this.validateJuriNameFactory();
  }
  
  validate(c: FormControl) {
    return this.validator(c);
  }


  // validation function
	public validateJuriNameFactory() : ValidatorFn {
	  return (c: AbstractControl) => {
	    
	    // let isValid = c.value === 'juri';
	    
	    // if(isValid) {
	    //   return null;
	    // } else {
	    //   return {
	    //     validateEqual: {
	    //       valid: false
	    //     }
	    //   };
	    // }
	    if(c.value){
            let self = c.value.trim();
            let e = c.root.get(this.validateEqual);
            if(e.value){
                let other =e.value.trim();
                

                if(self!='' && other!=''){
                    if(self===other){
                    	
                    	delete e.errors['validateEqual'];
                    	delete c.errors['validateEqual'];
             			if (!Object.keys(e.errors).length) e.setErrors(null);
             			if (!Object.keys(c.errors).length) c.setErrors(null);
                        
                    }else{
                    	
                        return { validateEqual: { valid: false } };
                    }
                }
            }
        }

        
        return null;
	  }
	}
  
}