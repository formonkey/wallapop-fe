import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFilterComponent } from '../components';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('Input filter component', () => {
  let component: InputFilterComponent;
  let fixture: ComponentFixture<InputFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
      ],
      declarations: [
        InputFilterComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputFilterComponent);

    component = fixture.componentInstance;
  });

  it('when testing module is configured should create a correct component instance', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(InputFilterComponent);
  });

  it('when create instance should has exist correct form build property', () => {
    expect((component as any).fb).toBeDefined();
    expect((component as any).fb).toBeInstanceOf(FormBuilder);
  });

  describe('when initialized', () => {
    it('should configured data not has type property set text in the type instance', () => {
      const changeSubscribeSpy = spyOn(component as any, 'changeSubscribe');

      component.data = [{}] as any;

      component.ngOnInit();

      expect(changeSubscribeSpy).toHaveBeenCalled();
      expect(component.type).toEqual('text');
    });

    it('should configured data has type property set value in the type instance', () => {
      component.data = [{ type: 'number' }] as any;

      component.ngOnInit();

      expect(component.type).toEqual('number');
    });

    it('should configured form data with correct value', () => {
      component.data = [{ value: 'test', }] as any;

      component.ngOnInit();

      expect(component.form?.getRawValue()).toEqual({
        key: 'test',
        search: '',
      });
    });

    it('and on click method is called should emit method without form data', () => {
      const handle = { emit: (data: any) => null };
      const handleEmitSpy = spyOn(handle, 'emit');

      (component as any).handleClick = handle;

      component.onClick();

      expect(handleEmitSpy).toHaveBeenCalled();
      expect(handleEmitSpy).toHaveBeenCalledWith(undefined);
    });

    it('and on click method is called should emit method with form data', () => {
      const handle = { emit: (data: any) => null };
      const handleEmitSpy = spyOn(handle, 'emit');

      component.data = [{ value: 'test', }] as any;
      (component as any).handleClick = handle;

      component.ngOnInit();
      component.onClick();

      expect(handleEmitSpy).toHaveBeenCalled();
      expect(handleEmitSpy).toHaveBeenCalledWith(component.form?.getRawValue());
    });

    it('and on clear method is called should emit method', () => {
      const handle = { emit: (data: any) => null };
      const handleEmitSpy = spyOn(handle, 'emit');

      (component as any).handleClear = handle;

      component.onClear();

      expect(handleEmitSpy).toHaveBeenCalled();
    });

    it('and on clear method is called should reset search value', () => {
      const handle = { emit: (data: any) => null };
      const handleEmitSpy = spyOn(handle, 'emit');

      component.data= [{}] as any;

      component.ngOnInit();

      component.form?.get('search')?.setValue('TestSearch');

      (component as any).handleClear = handle;

      expect(component.form?.getRawValue().search).toEqual('TestSearch');

      component.onClear();

      expect(handleEmitSpy).toHaveBeenCalled();
      expect(component.form?.getRawValue().search).toEqual('');
    });

    it('call change subscriber method and not exist form should not has error', () => {
      (component as any).changeSubscribe();

      expect(component.form).toBeUndefined();
    });

    it('and subscribed in form value should calle correct method and set correct value property', () => {
      const keyChangeSubscriberSpy = spyOn((component as any), 'keyChangeSubscriber');

      component.data = [{ value: 'test' }] as any;

      component.ngOnInit();

      component.form?.get('key')?.setValue('TestKey');
      component.form?.get('search')?.setValue('TestSearch');

      expect(keyChangeSubscriberSpy).toHaveBeenCalled();
    });

    it('and key change subscriber is called without form should not has error', () => {
      component.data = [{ value: '' }] as any;

      (component as any).keyChangeSubscriber('test');

      expect(component.type).toEqual('text');
    });

    it('and reset value search to void string should called key change subscriber', () => {
      component.data = [{ value: '', type: 'text' }, { value: 'test', type: 'number'}] as any;

      component.ngOnInit();
      component.form?.get('search')?.setValue('TestSearch');

      expect(component.form?.get('search')?.value).toEqual('TestSearch');

      (component as any).keyChangeSubscriber('test');

      expect(component.type).toEqual('number');
      expect(component.form?.get('search')?.value).toEqual('');
    });
  });

  afterEach(() => {
    fixture.destroy();
  });
});
