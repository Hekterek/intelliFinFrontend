import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editDescription',
  templateUrl: './editDescription.component.html',
  styleUrls: ['./editDescription.component.scss'],
})
export class EditDescriptionComponent implements OnInit {
  title: any = '';
  // descValue: any = '';
  form = this.fb.group({
    desc: [''],
  });

  constructor(
    private dialogRef: MatDialogRef<EditDescriptionComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder
  ) {
    this.title = data.title;
    this.form.controls.desc.setValue(data.desc);
  }

  ngOnInit() {
    this.loadValues();
  }

  loadValues(): void {
    this.title = this.data.title;
    this.form.controls.desc.setValue(this.data.value);
  }

  save() {
    this.dialogRef.close(this.form.controls.desc);
  }

  close() {
    this.dialogRef.close();
  }
}
