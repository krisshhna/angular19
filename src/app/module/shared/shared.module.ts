import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule}    from    '@angular/material/select';
import {MatCardModule}      from    '@angular/material/card';
import {MatExpansionModule} from    '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatMenuModule} from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AadharCardDirective } from '../../common/direc/aadhar-card.directive';
import { PanCardDirective } from '../../common/direc/pan-card.directive';
import { PhoneDirective } from '../../common/direc/phone.directive';
import { CapLetDirective } from '../../common/direc/cap-let.directive';
import { SShopDetailComponent } from './comp/s-shop-detail/s-shop-detail.component';
import { SCustomerComponent } from './comp/s-customer/s-customer.component';
import { OnlyNumbDirective } from '../../common/direc/only-numb.directive';
import { STestComponent } from './comp/s-test/s-test.component';


@NgModule({
  declarations: [
    AadharCardDirective,
    PanCardDirective,
    PhoneDirective,
    CapLetDirective,
    OnlyNumbDirective,

    SShopDetailComponent,
    SCustomerComponent,
    STestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    MatMenuModule,
    MatSnackBarModule
  ],
  exports:[
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    MatMenuModule,
    MatSnackBarModule,

    ReactiveFormsModule,
    FormsModule,
    AadharCardDirective,
    PanCardDirective,
    PhoneDirective,
    CapLetDirective,
    OnlyNumbDirective,

    SShopDetailComponent,
    SCustomerComponent,
    STestComponent
  ]
})
export class SharedModule { }
