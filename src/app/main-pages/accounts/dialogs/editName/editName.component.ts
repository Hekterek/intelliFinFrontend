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
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loadValues();
  }

  loadValues(): void {
    this.title = this.data.title;
    this.form.controls.accountName.setValue(this.data.value);
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
