import {effect, Service, signal} from '@angular/core';

@Service()
export class SavedServices {
  private storageKey = 'foodBanks.saved';
  private lightModeKey = 'lightMode.lightMode';
  private saved = signal<string[]>(this.load());
  private lightMode = signal<boolean>(this.loadLightMode());
  savedIDs = this.saved.asReadonly();

  constructor(){
    effect(() => {
      try{ localStorage.setItem(this.storageKey, JSON.stringify(this.saved()));
      localStorage.setItem(this.lightModeKey, JSON.stringify(this.lightMode()));}
      catch{ console.log("Trouble saving data")}
    });
  }

  private load(): string[] {
    try{ return JSON.parse(localStorage.getItem(this.storageKey) ?? '[]');}
    catch{ return []; }
  }

  private loadLightMode(){
    try{ return JSON.parse(localStorage.getItem(this.lightModeKey) ?? 'true');}
    catch{ return []; }
  }

  toggleSaved(id:string){
    this.saved.update(current =>
    current.includes(id) ?
    current.filter(itemID => itemID !== id)
    : [...current, id]);
  }

  toggleLightMode(){
    this.lightMode.update(value => !value);
  }

  isSaved(id:string){
    return this.saved().includes(id);
  }

  isLightMode(){
    return this.lightMode()
  }
}
