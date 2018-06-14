import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatextComponent } from './chatext.component';

describe('ChatextComponent', () => {
  let component: ChatextComponent;
  let fixture: ComponentFixture<ChatextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
