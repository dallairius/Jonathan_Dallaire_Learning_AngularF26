import {Directive, inject, input, output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialog} from '../confirm-dialog/confirm-dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Directive({
  selector: '[appProtect]',
  host: {
  '(click)': 'onClick()'
  }
})
export class AppProtect {
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  question = input('', { alias: 'appProtect'});
  confirmed = output<void>();

  onClick(){
    this.dialog.open(ConfirmDialog, { data: { message: this.question()}})
      .afterClosed().subscribe((ok) => {if(ok) {
      this.confirmed.emit();
      this.snackBar.open('item deleted', 'OK', { duration: 2000});
    }
      });
  }

}
