
import { AbstractControl, FormControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, forwardRef, OnInit,Attribute } from '@angular/core';

@Directive({
  selector: '[validateEqual][ngModel]',
  providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective), multi: true }
    ]

})
export class EqualValidatorDirective {

  constructor(@Attribute('validateEqual') public validateEqual: string) { }

  validate(c: AbstractControl): { [key: string]: any } {
        // self value
        let v = c.value;

        // control vlaue
        let e = c.root.get(this.validateEqual);

        // value not equal
        if (e && v !== e.value ) {
        	
          return {
            validateEqual: { valid: false } 
          };
        }
        console.log('success');
        return null;
    }

}









import { AbstractControl, FormControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, forwardRef, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Directive({
    selector: '[validateDate][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => XontVenturaValidateDate), multi: true }
    ]
})

export class XontVenturaValidateDate implements OnInit  {
    validator: Function;
    format = 'yyyy/mm/dd';

    constructor(private http: Http) {
        this.validator = this.validateDateFactory();
    }

    ngOnInit() {
        //this.http.get("./ventura.config.json")//dev mode
        this.http.get("../ventura.config.json")//publish mode
            .subscribe(
            (jsonData) => {
                if (jsonData.json().appSettings.clientDateFormat) {

                    this.format = jsonData.json().appSettings.clientDateFormat;

                }

            },
            (err) => console.error(err),
            () => console.log("observable complete")
            );
    }


    validate(c: FormControl) {
        return this.validator(c);
    }

    public validateDateFactory() {
        return (c: FormControl) => {
      
            var text = String(c.value).trim();
            
            if (text == '') {
                return null; 
            } else {
                var year = '';
                var month = '';
                var date = '';

                var array = [];

                if (this.format == 'yyyy/mm/dd') {
                    array = text.split('/');
                    if (array.length == 3) {
                        year = array[0]; month = array[1]; date = array[2];
                        return this.validateYearMonthDate(year, month, date);
                    } else {
                        return { validateDate: { valid: false } };
                    }
                } else if (this.format == 'yyyy/dd/mm') {
                    array = text.split('/');
                    if (array.length == 3) {
                        year = array[0]; month = array[2]; date = array[1];
                        return this.validateYearMonthDate(year, month, date);
                    } else {
                        return { validateDate: { valid: false } };
                    }

                } else if (this.format == 'mm/yyyy/dd') {
                    array = text.split('/');
                    if (array.length == 3) {
                        year = array[1]; month = array[0]; date = array[2];
                        return this.validateYearMonthDate(year, month, date);
                    } else {
                        return { validateDate: { valid: false } };
                    }

                } else if (this.format == 'mm/dd/yyyy') {
                    array = text.split('/');
                    if (array.length == 3) {
                        year = array[2]; month = array[0]; date = array[1];
                        return this.validateYearMonthDate(year, month, date);
                    } else {
                        return { validateDate: { valid: false } };
                    }

                } else if (this.format == 'dd/yyyy/mm') {
                    array = text.split('/');
                    if (array.length == 3) {
                        year = array[1]; month = array[2]; date = array[0];
                        return this.validateYearMonthDate(year, month, date);
                    } else {
                        return { validateDate: { valid: false } };
                    }

                } else if (this.format == 'dd/mm/yyyy') {
                    array = text.split('/');
                    if (array.length == 3) {
                        year = array[2]; month = array[1]; date = array[0];
                        return this.validateYearMonthDate(year, month, date);
                    } else {
                        return { validateDate: { valid: false } };
                    }

                }


                else if (this.format == 'yyyy.mm.dd') {
                    array = text.split('.');
                    if (array.length == 3) {
                        year = array[0]; month = array[1]; date = array[2];
                        return this.validateYearMonthDate(year, month, date);
                    } else {
                        return { validateDate: { valid: false } };
                    }

                } else if (this.format == 'yyyy.dd.mm') {
                    array = text.split('.');
                    if (array.length == 3) {
                        year = array[0]; month = array[2]; date = array[1];
                        return this.validateYearMonthDate(year, month, date);
                    } else {
                        return { validateDate: { valid: false } };
                    }

                } else if (this.format == 'mm.yyyy.dd') {
                    array = text.split('.');
                    if (array.length == 3) {
                        year = array[1]; month = array[0]; date = array[2];
                        return this.validateYearMonthDate(year, month, date);
                    } else {
                        return { validateDate: { valid: false } };
                    }
                } else if (this.format == 'mm.dd.yyyy') {
                    array = text.split('.');
                    if (array.length == 3) {
                        year = array[2]; month = array[0]; date = array[1];
                        return this.validateYearMonthDate(year, month, date);
                    } else {
                        return { validateDate: { valid: false } };
                    }
                } else if (this.format == 'dd.yyyy.mm') {
                    array = text.split('.');
                    if (array.length == 3) {
                        year = array[1]; month = array[2]; date = array[0];
                        return this.validateYearMonthDate(year, month, date);
                    } else {
                        return { validateDate: { valid: false } };
                    }
                } else if (this.format == 'dd.mm.yyyy') {
                    array = text.split('.');
                    if (array.length == 3) {
                        year = array[2]; month = array[1]; date = array[0];
                        return this.validateYearMonthDate(year, month, date);
                    } else {
                        return { validateDate: { valid: false } };
                    }
                }


                else if (this.format == 'yyyy-mm-dd') {
                    array = text.split('-');
                    if (array.length == 3) {
                        year = array[0]; month = array[1]; date = array[2];
                        return this.validateYearMonthDate(year, month, date);
                    } else {
                        return { validateDate: { valid: false } };
                    }

                } else if (this.format == 'yyyy-dd-mm') {
                    array = text.split('-');
                    if (array.length == 3) {
                        year = array[0]; month = array[2]; date = array[1];
                        return this.validateYearMonthDate(year, month, date);
                    } else {
                        return { validateDate: { valid: false } };
                    }
                } else if (this.format == 'mm-yyyy-dd') {
                    array = text.split('-');
                    if (array.length == 3) {
                        year = array[1]; month = array[0]; date = array[2];
                        return this.validateYearMonthDate(year, month, date);
                    } else {
                        return { validateDate: { valid: false } };
                    }
                } else if (this.format == 'mm-dd-yyyy') {
                    array = text.split('-');
                    if (array.length == 3) {
                        year = array[2]; month = array[0]; date = array[1];
                        return this.validateYearMonthDate(year, month, date);
                    } else {
                        return { validateDate: { valid: false } };
                    }
                } else if (this.format == 'dd-yyyy-mm') {
                    array = text.split('-');
                    if (array.length == 3) {
                        year = array[1]; month = array[2]; date = array[0];
                        return this.validateYearMonthDate(year, month, date);
                    } else {
                        return { validateDate: { valid: false } };
                    }
                } else if (this.format == 'dd-mm-yyyy') {
                    array = text.split('-');
                    if (array.length == 3) {
                        year = array[2]; month = array[1]; date = array[0];
                        return this.validateYearMonthDate(year, month, date);
                    } else {
                        return { validateDate: { valid: false } };
                    }
                }
                else {
                    alert('Invalid date format in "ventura.config.json"');
                }
            }

       
            return { validateDate: { valid: false } };
        };
    }

    public validateYearMonthDate(year, month, date) {
        var invalid = { validateDate: { valid: false } };
        if (year.length != year.trim().length) {
            return invalid;
        }
        if (!year.match(/^\d{4}$/)) {
            return invalid;
        }
        if (parseInt(year) < 1753) {
            return invalid;
        }

        if (month.length != month.trim().length) {
            return invalid;
        }
        if (!month.match(/^\d{2}$/)) {
            return invalid;
        }
        

        if (parseInt(month) <1 || parseInt(month)>12) {
            return invalid;
        }

        if (date.length != date.trim().length) {
            return invalid;
        }
        if (!date.match(/^\d{2}$/)) {
            return invalid;
        }
        var maxDate = new Date(parseInt(year),parseInt(month), 0).getDate();
        if (parseInt(date) < 1 || parseInt(date) > maxDate) {
            return invalid;
        }

        return null;
    }

}



export interface Validator { validate(c: AbstractControl): { [key: string]: any }; }