import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, FormRecord } from '@angular/forms';


@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
  
export class ProfileEditorComponent {
  private formBuilder = inject(FormBuilder);

  profileForms = this.formBuilder.group({
    firstNames: [''],
    lastNames: [''],
    addresss: this.formBuilder.group({
      streets: [''],
      citys: [''],
      states: [''],
      zips: [''],
    }),
 
  });

  profileFormm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });

  get aliases() {
    return this.profileFormm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
    }),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      lastName: 'Michel',
      address: {
        street: '123 Drew Street',
        city: 'Yaounde',
      },
    });
  }
  
}
const login = new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
});
const emailDomain = login.value.email 

const logins = new UntypedFormGroup({
  email: new UntypedFormControl(''),
  password: new UntypedFormControl(''),
});
 
const email = new FormControl('angularrox@gmail.com');
email.reset();
console.log(email.value); // null

// const emails = new FormControl(null);
// emails.setValue('angularrox@gmail.com'); // Error!

const names = new FormArray([new FormControl('Alex')]);
names.push(new FormControl('Jess'));

const loginss = new FormGroup({
  email: new FormControl('', { nonNullable: true }),
  password: new FormControl('', { nonNullable: true }),
});

// const addresses = new FormRecord<FormControl<string | null>>({});
// addresses.addControl('Andrew', new FormControl('2340 Folsom St'));
const fb = new FormBuilder();
// const login = fb.nonNullable.group({
//   email: '',
//   password: '',
// });

const addresses = fb.record({ 'Andrew': '2340 Folsom St' });