import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
export interface DialogData {
  message: string;
}

@Component({
  selector: 'app-alert',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
  readonly dialogRef = inject(MatDialogRef<AlertComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  cancel(): void {
    this.dialogRef.close(false);
  }
}
