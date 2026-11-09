import {Component, computed, inject, input, signal} from '@angular/core';
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
import {APIService} from '../services/apiservice';
import {FoodBanks} from '../Shared/Models/food-banks';

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
    name: ['',[Validators.required,Validators.minLength(4)]],
    address: ['',Validators.required],
    phone:['',[Validators.required,whiteSpaceValidator()]],
    email:['',Validators.required]

  })
  private api = inject(APIService);

  foodBankList = signal<FoodBanks[]>([]);
  errorMessage = signal<string>('');



  ngOnInit(): void {
    this.orderForm.patchValue({
      name: this.order?.name,
    })


    this.api.getFoodBanks().subscribe({
      next: (data) => {
        this.foodBankList.set(data);
      },
      error: (err) => {
        this.errorMessage.set('Failed to load FoodBanks.');
        console.error(err);
      }
    })
  }

  order =
    this.foodBankList().find(o => o.id === this.id());
  onSubmit(): void{
    if(this.orderForm.invalid) return;

    const value = this.orderForm.getRawValue();
    if(this.order) {
      /*this.order()?.customerName = value.customerName
      this.order()?.combo = value.combo
      this.order()?.howMany = value.howMany
      this.order()?.whichProtein = value.whichProtein*/

    }else {
      /*this.service.addOrder({id, ...value})*/
    }
    this.orderForm.reset({})
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
