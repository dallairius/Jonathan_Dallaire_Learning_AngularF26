import {Service, signal} from '@angular/core';

@Service()
export class Guard {
  guardEnabled = signal(false);
  onClick(){
    if(this.guardEnabled()){
      this.guardEnabled.set(false)
    }else{
      this.guardEnabled.set(true)
    }
  }
}
