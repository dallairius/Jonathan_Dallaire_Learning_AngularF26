import {Component, computed, inject, input} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule, ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {TacoService} from '../services/taco-service';

@Component({
  imports: [
    ReactiveFormsModule
  ],
  selector: 'app-order-form',
  styleUrl: './order-form.css',
  templateUrl: './order-form.html',
})
export class OrderForm {
  id = input<string>();

  private fb = inject(FormBuilder);
  orderForm = this.fb.group({
    customerName: ['Name',[Validators.required,Validators.minLength(4)]],
    combo: ['',Validators.required],
    howMany:['3',[Validators.required,whiteSpaceValidator()]],
    whichProtein:['beef',Validators.required]

  },{validators: [beefAmountValidator()]
  })
  private service = inject(TacoService);

  order = computed(() =>
      this.service.orderArray().find(o => o.orderId === Number(this.id())))

  onSubmit(): void{
    if(this.orderForm.invalid) return;

    const value = this.orderForm.getRawValue();
    if(this.order()) {
      /*this.order()?.customerName = value.customerName
      this.order()?.combo = value.combo
      this.order()?.howMany = value.howMany
      this.order()?.whichProtein = value.whichProtein*/

    }else {
      /*this.service.addOrder({id, ...value})*/
    }
    this.orderForm.reset({})
  }

  ngOnInit(){
    this.orderForm.patchValue({
      customerName: this.order()?.customerName,
      //combo: this.order()?.combo,
      //howMany: this.order()?.howMany,
      whichProtein: this.order()?.whichProtein


    })
  }
}

export function whiteSpaceValidator(): ValidatorFn{

  return (control:AbstractControl): ValidationErrors | null => {
    const value = control.value
    if (!value) {
      return null;
    }


    const isWhiteSpace = /\s+/.test(value);

    return isWhiteSpace ? {allWhiteSpaces:true}:null;
  }
}

export function beefAmountValidator(): ValidatorFn{
  return(form: FormGroup): ValidationErrors | null => {

    const isBeef = form.get("whichProtein").value;
    const tacoAmount = form.get("howMany").value;
    const wrongAmount = (tacoAmount > 10) && (isBeef == "beef");

    return wrongAmount? {tooMuchBeef: true} : null;
  }
}
