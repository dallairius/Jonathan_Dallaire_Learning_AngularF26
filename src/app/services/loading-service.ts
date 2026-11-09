import {computed, Service, signal} from '@angular/core';

@Service()
export class LoadingService {
  private count = signal<number>(0);

  increaseCount(){
    this.count.update(value=> value+1)
  }
  decreaseCount() {
    if (this.count() != 0) {
    this.count.update(value => value - 1);
    }
  }
  isCount = computed(()=>this.count())
  isLoading = computed(() => this.count() > 0)
}
