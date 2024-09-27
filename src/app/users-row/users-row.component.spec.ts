import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRowComponent } from './users-row.component';

describe('UsersRowComponent', () => {
  let component: UsersRowComponent;
  let fixture: ComponentFixture<UsersRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
