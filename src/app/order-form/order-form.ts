import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
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
  private fb = inject(FormBuilder);
  orderForm = this.fb.group({
    customerName: ['Name',[Validators.required,Validators.minLength(4)]],
    combo: ['yes or no',Validators.required],
    howMany:['3',Validators.required],
    whichProtein:['beef',Validators.required]

  })
  private service = inject(TacoService);
  onSubmit(): void{
    if(this.orderForm.invalid) return;

    const value = this.orderForm.getRawValue();
    /*this.service.addOrder({
      orderId: Date.now(),
      combo: value.combo,
      howMany: value.howMany,
      whichProtein: value.whichProtein,
      customerName: value.customerName})*/
    this.orderForm.reset({})
  }
}
