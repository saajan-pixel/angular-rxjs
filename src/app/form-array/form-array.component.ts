import { Component, OnInit } from '@angular/core';
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
  form!: FormGroup; //1
  enumCat = category;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.enableclass(this.form);
  }
  //formarray
  // createForm(item:any={}){//2
  //   this.form = this.fb.group({
  //     name:[item.name?item.name:''],
  //     teacher:[item.teacher?item.teacher:''],
  //     section:[item.section?item.section:'A',Validators.required],
  //     total:[item.total?item.toatal:''],
  //     building:[item.building?item.building:''],
  //     students: this.fb.array(//3
  //       (()=> {
  //           if(!item.students){
  //             return [this.createStudentForm()];
  //           }
  //           else{
  //             return item.students.map((item: any)=>{
  //               this.createStudentForm(item)
  //             })
  //           }
  //         }
  //       )()
  //     )

  //   })
  // }
  // createStudentForm(item:any = {}){//4
  //   return this.fb.group({
  //     name:[item.name?item.name:''],
  //     rollno:[item.name?item.name:''],
  //     house:[item.house?item.house:''],
  //     gender:[item.gender?item.gender:'']
  //   })

  // }

  // get students(){ //setting property of student as formArray //5
  //   return this.form.get('students') as FormArray
  // }

  // addStudentForm(){//used for data entry(inserting value into student form array)//6
  //   const control=<FormArray> this.form.controls.students
  //   control.push(this.createStudentForm())

  // }

  // enableAlldetailForm(){ //for enabling all formcontrol of students array //7
  //   this.students.controls.forEach((elem:any)=>{
  //     elem.enable()
  //   })
  // }

  // keyAddEvent():void{ //property binding creation method of student array //8
  //   this.enableAlldetailForm();
  //   if(this.students.valid){
  //     for(let control of this.students.controls){
  //       control.disable();
  //     }
  //     this.addStudentForm();
  //   }

  // }

  // getStudentDetail(form:any){
  //   return form.controls.students.controls
  // }

  createForm(item: any = {}) {
    this.form = this.fb.group({
      name: [item.name ? item.name : ''],
      age: [item.age ? item.age : ''],
      address: [item.address ? item.address : ''],
      school: this.fb.array(
        (() => {
          if (!item.school) {
            return [this.studentForm()];
          }
          return item.school.map((elem: any) => this.studentForm(elem));
        })()
      ),
    });
    this.form.get('school')?.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  studentForm(item: any = {}) {
    return this.fb.group({
      sname: [item.sname ? item.sname : '',Validators.required],
      region: [item.region ? item.region : '',Validators.required],
      class: this.fb.array(
        (() => {
          if (!item.class) {
            return [this.ClassForm()];
          }
          return item.class.map((elem: any) => this.ClassForm(elem));
        })()
      ),
    });
  }

  // school implementation
  get school() {
    return this.form.get('school') as FormArray;
  }

  addSchool() {
    const control = this.form.controls.school as FormArray;
    control.push(this.studentForm());
  }

  enableForm() {
    this.school.controls.forEach((elem) => {
      elem.enable();
    });
  }

  keyAddEvent() {
    this.enableForm();
    if (this.school.valid) {
      for (let control of this.school.controls) {
        control.disable();
      }
    }
    this.addSchool();
  }

  getSchoolDetail(form: any) {
    return form.controls.school.controls;
  }

  removeSchool(i: any, form: any) {
    const control = form.controls.school;
    if (control.length > 1) {
      control.removeAt(i);
    }
  }

  // removeSchool(i:any){
  //   (this.form.get('school') as FormArray).removeAt(i)
  // }

  enableschoolFormGroup(i: any, form: any) {
    const control = form.controls.school.controls[i];
    console.log(control);
    control.enable();
  }

  // class Form
  ClassForm(item: any = {}) {
    return this.fb.group({
      section: [item.section ? item.section : '', Validators.required],
      numberstd: [item.numberstd ? item.numberstd : '',Validators.required],

    });
  }

  addClass(abc: any) {
    const control = abc.get('class') as FormArray;
    console.log("controlks",control)
    control.push(this.ClassForm());
  }

  enableclass(form:any){
    console.log("enable",form)
  }



  getClassDetail(form: any) {
    return form.controls.class.controls
    // return form.controls.class.controls;
  }
  getAccess(firstArr: any, Fchild: any) {
    console.log(firstArr);
    console.log(Fchild);
  }
}
