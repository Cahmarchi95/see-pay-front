import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatButtonModule, MatDialogClose],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {}
