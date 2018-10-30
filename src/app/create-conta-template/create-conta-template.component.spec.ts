import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContaTemplateComponent } from './create-conta-template.component';

describe('CreateContaTemplateComponent', () => {
  let component: CreateContaTemplateComponent;
  let fixture: ComponentFixture<CreateContaTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateContaTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContaTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
