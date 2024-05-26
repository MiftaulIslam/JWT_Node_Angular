import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeusersComponent } from './fakeusers.component';

describe('FakeusersComponent', () => {
  let component: FakeusersComponent;
  let fixture: ComponentFixture<FakeusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeusersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FakeusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
