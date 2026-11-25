import { TestBed } from '@angular/core/testing';
import { SavedServices } from './saved-services';

describe('SavedServices', () => {
  let service: SavedServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
