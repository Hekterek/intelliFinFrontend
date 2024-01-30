import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { categoryDTO } from 'src/app/models/categoryModels';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  categorySub!: Subscription;
  categoriesFromDB!: categoryDTO[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categorySub = this.categoryService.getAll().subscribe((data) => {
      this.categoriesFromDB = data;
    });
  }

  ngOnDestroy(): void {
    this.categorySub.unsubscribe();
  }
}
