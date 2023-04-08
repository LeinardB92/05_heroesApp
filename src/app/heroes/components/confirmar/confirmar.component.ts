import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: []
})
export class ConfirmarComponent {
  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Heroe){}

  confirmacionBorrar(){
    this.dialogRef.close(true)
  }

  confirmacionCancelar(){
    this.dialogRef.close()
  }
}
