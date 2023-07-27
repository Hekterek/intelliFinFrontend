import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editName',
  templateUrl: './editName.component.html',
  styleUrls: ['./editName.component.scss'],
})
export class EditNameComponent implements OnInit {
  title: any = '';
  form = this.fb.group({
    accountName: [''],
  });

  constructor(
    private dialogRef: MatDialogRef<EditNameComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private fb: FormBuilder
  ) {
    this.title = data.title;
  }

  ngOnInit() {}

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
