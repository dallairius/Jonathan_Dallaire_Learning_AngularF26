import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TacoDetail } from './taco-detail';

describe('TacoDetail', () => {
  let component: TacoDetail;
  let fixture: ComponentFixture<TacoDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TacoDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(TacoDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
