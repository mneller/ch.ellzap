import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EllzapLibsImpressumComponent } from 'ellzap-libs/impressum';

describe('EllzapLibsImpressumComponent', () => {
  let component: EllzapLibsImpressumComponent;
  let fixture: ComponentFixture<EllzapLibsImpressumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EllzapLibsImpressumComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EllzapLibsImpressumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
