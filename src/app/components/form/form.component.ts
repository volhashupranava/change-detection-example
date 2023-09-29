import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormItem, FormService } from '../../services/form.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CDCountClass } from '../../cd-count.class';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent extends CDCountClass {

  isErrorMessageShown = false;

  readonly form = this.fb.group({
    firstName: ['John', Validators.required],
    lastName: ['Smith', Validators.required],
  })

  constructor(
    private readonly formService: FormService,
    private readonly fb: FormBuilder,
  ) {
    super();
  }

  submitForm() {
    const isFormValid = this.form.valid;
    this.isErrorMessageShown = !isFormValid;
    if (isFormValid) {
      this.formService.addNewItem(this.form.value as FormItem);
    }

  }

}
