import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { categoryDTO } from 'src/app/models/categoryModels';
import { CategoryService } from 'src/app/services/category.service';
import { AddNewCategoryDialogComponent } from './dialogs/addNewCategoryDialog/addNewCategoryDialog.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  categorySub!: Subscription;
  categoriesFromDB: categoryDTO[] = [];

  constructor(
    private categoryService: CategoryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.categorySub = this.categoryService.getAll().subscribe((data) => {
      this.categoriesFromDB = data;
    });
    // this.openAddNewCategoryDialog();
  }

  ngOnDestroy(): void {
    this.categorySub.unsubscribe();
  }

  openAddNewCategoryDialog(): void {
    const dialogRef = this.dialog.open(AddNewCategoryDialogComponent, {
      width: 'min(90%, 400px)',
    });

    dialogRef.afterClosed().subscribe((data: categoryDTO) => {
      if (data !== undefined) {
        this.categoryService
          .saveNewCategory(data)
          .subscribe((data: categoryDTO) => {
            this.categoriesFromDB.push(data);
          });
      }
    });
  }
}
