import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { SetAccountColorComponent } from 'src/app/main-pages/accounts/dialogs/setAccountColor/setAccountColor.component';
import { SetAccountIconDialogComponent } from 'src/app/main-pages/accounts/dialogs/setAccountIconDialog/setAccountIconDialog.component';
import { categoryDTO } from 'src/app/models/categoryModels';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-addNewCategoryDialog',
  templateUrl: './addNewCategoryDialog.component.html',
  styleUrls: ['./addNewCategoryDialog.component.scss'],
})
export class AddNewCategoryDialogComponent implements OnInit {
  newCategoryForm = this.fb.group({
    name: [''],
    description: [''],
    icon: ['./assets/icons/accountIcons/accounts.png'],
    color: ['rgb(248, 185, 69)'],
    amount: [0],
    isBudgetOn: [false],
    budget: [0],
  });

  constructor(
    private dialog: MatDialog,
    private currentDialog: MatDialogRef<AddNewCategoryDialogComponent>,
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {}

  openSetIconDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '100%';
    dialogConfig.maxWidth = '100vw';

    dialogConfig.data = {
      title: 'Choose icon',
    };

    const dialogRef = this.dialog.open(
      SetAccountIconDialogComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((data) => {
      if (data !== undefined || null) {
        this.newCategoryForm.controls.icon.setValue(data);
      }
    });
  }

  openSetColorDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '100%';
    dialogConfig.maxWidth = '100vw';

    dialogConfig.data = {
      title: 'Choose color',
    };

    const dialogRef = this.dialog.open(SetAccountColorComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data !== undefined || null) {
        this.newCategoryForm.controls.color.setValue(data);
      }
    });
  }

  saveNewCategory(): void {
    const categoryDto = this.newCategoryForm.value as categoryDTO;
    this.currentDialog.close(categoryDto);
  }
}
