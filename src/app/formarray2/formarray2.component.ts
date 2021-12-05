import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formarray2',
  templateUrl: './formarray2.component.html',
  styleUrls: ['./formarray2.component.scss']
})
export class Formarray2Component implements OnInit {
  form!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(item: any = {}) {
    this.form = this.fb.group({
      name: [item.name ? item.name : '', Validators.required],
      height: [item.height ? item.height : 4, Validators.required],
      country: this.fb.array((
        () => {
          if (!item.country) {
            return [this.addCountry()]
          }
          return item.country.map((elem: any) => this.addCountry(elem))
        }
      )())
    })
  }


  // country form array
  addCountry(item: any = {}) {
    return this.fb.group({
      countryname: [item.countryname ? item.countryname : '', Validators.required],
      continient: [item.continient ? item.continient : '', Validators.required],
      gender: this.fb.array((
        () => {
          if (!item.gender) {
            return [this.addGender()]
          }
          return item.gender.map((elem: any) => this.addGender(elem))

        }
      )())
    })
  }


  // setting country as form array
  get country() {
    return this.form.get('country') as FormArray
  }


  // add the new form array
  addCountryDetail() {
    const control = this.form.controls.country as FormArray
    control.push(this.addCountry())
    // const x=this.form.get('country') as FormArray

    // x.push(this.addCountry())
  }

  // enabled form array
  enableForm() {
    this.country.controls.forEach((elem: any) => {
      elem.enable()
    })
  }

  // triggers enabled form, disabled form and add the formarray

  FormAddEvent() {
    this.enableForm()
    if (this.country.valid) {
      for (let control of this.country.controls) {
        control.disable()
      }

    }
    this.addCountryDetail()
  }
  // get access of controls of country formarray
  getCountryDetail(form: any) {
    return form.controls.country.controls
  }

  // delete individual form array
  removeCountry(form: any, i: any) {
    const x = form.controls.country
    if (x.length > 1) {
      x.removeAt(i)
    }
  }
  // edit diabled form array
  enableIForm(form: any, i: any) {
    const y = form.controls.country.controls[i]
    y.enable()

  }


  addGender(item: any = {}) {
    return this.fb.group({
      male: [item.male ? item.male : ''],
      female: [item.female ? item.female : '']
    })


  }

  addGenderDetail(abc: any) {
    // abc acts as country controls
    // const control = abc.get('gender') as FormArray
    const control=abc.controls.gender as FormArray
    control.push(this.addGender())

  }

  enableIGenderForm(abc:any){
    abc.controls.gender.controls.forEach((elem:any)=>{
      elem.enable()
    })

  }

  GenderAddEvent(abc:any){
    this.enableIGenderForm(abc)
    if(abc.controls.gender.valid){
      for(let control of abc.controls.gender.controls)
      {
        control.disable()
      }

    }
    this.addGenderDetail(abc)
  }

  getGenderDetail(abc: any) {
    // return abc.controls.gender.controls
    return abc.get('gender').controls
  }

  enablegenderForm(abc:any,j:any){
    const x=abc.controls.gender.controls[j]
    x.enable()
  }

  removeGenderForm(abc:any,j:any){
    // const y=abc.controls.gender
    const y=abc.get('gender')
    if(y.length>1){
      y.removeAt(j)
    }
  }







}
