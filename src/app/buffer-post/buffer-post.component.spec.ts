import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferPostComponent } from './buffer-post.component';

describe('BufferPostComponent', () => {
  let component: BufferPostComponent;
  let fixture: ComponentFixture<BufferPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BufferPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BufferPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
