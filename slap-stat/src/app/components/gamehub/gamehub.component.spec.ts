import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamehubComponent } from './gamehub.component';

describe('GamehubComponent', () => {
  let component: GamehubComponent;
  let fixture: ComponentFixture<GamehubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamehubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamehubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
