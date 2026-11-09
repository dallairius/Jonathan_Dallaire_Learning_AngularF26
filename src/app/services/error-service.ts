import {Service, signal} from '@angular/core';

@Service()
export class ErrorService {
  errorMessage = signal<string>("Current error message")

  clearError(){
    this.errorMessage.set("");
  }
}
