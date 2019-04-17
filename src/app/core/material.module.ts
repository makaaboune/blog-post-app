// Contain only Angular Material Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatCardModule, MatInputModule,
    MatToolbarModule, MatIconModule, MatFormFieldModule, MatTooltipModule,
    MatRippleModule, MatBadgeModule, MatSnackBarModule, MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
    imports: [

    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatRippleModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
    ],

    exports: [

    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatRippleModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
    ],

})

export class MaterialModule { }
