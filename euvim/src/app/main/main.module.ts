import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatSidenavModule, MatCardModule, MatListModule, MatToolbarModule, MatButtonModule, MatProgressBarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { MainRouting } from './main.routing';
import { AuthGuard } from './auth.guard';
import { LoadingService } from './services/loading.service';

@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    RouterModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  providers: [
    AuthGuard,
    LoadingService
  ],
  declarations: [MainComponent]
})
export class MainModule { }
