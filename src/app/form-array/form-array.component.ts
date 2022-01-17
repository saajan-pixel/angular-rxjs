import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
enum category {
  enable = 1,
  disable = 0,
}

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent implements OnInit {
  form!: FormGroup;
  @ViewChild('age') ageEvent!: ElementRef<any>;
  // @ViewChild('blockno') blockEvent!:ElementRef
  @ViewChildren('blockno') blockEvent!: QueryList<ElementRef>;
  @ViewChildren('tempaddress') tempAddressEvent!: QueryList<ElementRef>;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm(item: any = {}) {
    this.form = this.fb.group({
      name: [item.name],
      age: [item.age],
      address: this.fb.array(
        (() => {
          if (!item.address) {
            return [this.createAddressform()];
          } else {
            return item.address.map((res: any) => this.createAddressform(res));
          }
        })()
      ),
    });
  }

  createAddressform(item: any = {}) {
    return this.fb.group({
      blockno: [item.blockno],
      tempAddress: [item.tempAddress],
    });
  }

  get address() {
    return this.form.get('address') as FormArray;
  }

  addAddressFormField() {
    const control = this.address;
    control.push(this.createAddressform());
  }
  enableAddressFormFields() {
    this.address.controls.forEach((res) => {
      res.enable();
    });
  }

  keyEventAddAddress() {
    this.enableAddressFormFields();
    if (this.address.valid) {
      this.address.controls.forEach((res) => {
        res.disable();
      });
      this.addAddressFormField();
    }
  }

  getAddressdetails(form: any) {
    return form.controls.address.controls;
  }
  preventEnter(event: any) {
    event.preventDefault();
  }

  gotoAge() {
    console.log(this.ageEvent);
    this.ageEvent.nativeElement.focus();
  }
  gotoblockno() {
    console.log(this.blockEvent);
    this.blockEvent.first.nativeElement.focus();
    // this.blockEvent.nativeElement.focus()
  }
  gototempAddress(event: any, i: number) {
    console.log('event', event);
    console.log('i=>', i);
    if (event.keyCode === 13) {
      event.preventDefault();
      if (i === 0) {
        this.tempAddressEvent.first.nativeElement.focus();
      } else {
        this.tempAddressEvent.last.nativeElement.focus();
      }
    }
  }
  keyAdd(event: any, i: number) {
    event.preventDefault();
    this.keyEventAddAddress();
    console.log(i);
    setTimeout(() => {
      this.blockEvent.last.nativeElement.focus();
    }, 200);
  }
}
