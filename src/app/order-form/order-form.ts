import {Component, computed, inject, input} from '@angular/core';
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
  id = input<string>();

  private fb = inject(FormBuilder);
  orderForm = this.fb.group({
    customerName: ['Name',[Validators.required,Validators.minLength(4)]],
    combo: ['',Validators.required],
    howMany:['3',Validators.required],
    whichProtein:['beef',Validators.required]

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
      /*this.service.addOrder({
      orderId: Date.now(),
      combo: value.combo,
      howMany: value.howMany,
      whichProtein: value.whichProtein,
      customerName: value.customerName})*/
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
