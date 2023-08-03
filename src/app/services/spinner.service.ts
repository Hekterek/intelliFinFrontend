import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SpinnerComponent } from '../shared/spinner/spinner.component';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  spinner: any;

  constructor(private dialog: MatDialog) {}

  runSpinner() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    dialogConfig.position = {
      left: '0',
      top: '0',
    };
    dialogConfig.width = '100%';
    dialogConfig.maxWidth = '100vw';
    dialogConfig.height = '100vh';
    dialogConfig.backdropClass = 'bg-spinner';
    this.spinner = this.dialog.open(SpinnerComponent, dialogConfig);
  }

  stopSpinner() {
    this.spinner.close();
  }
}
