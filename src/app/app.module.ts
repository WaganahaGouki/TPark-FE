import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './register-user/register-user.component';
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import { MapComponent } from './map/map.component';
import {RouterModule, Routes} from "@angular/router";
import {GoogleMapsModule} from "@angular/google-maps";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { NavigationComponent } from './navigation/navigation.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { AccountComponent } from './account/account.component';
import { RequestParkingLotComponent } from './request-parking-lot/request-parking-lot.component';
import { ParkingLotsListComponent } from './parking-lots-list/parking-lots-list.component';

const routes: Routes = [
    {
      path: '',
      component: RegisterUserComponent
    },
    {
      path: 'map',
      component: MapComponent
    },
    {
      path: 'account',
      component: AccountComponent
    },
    {
      path: 'requestParkingLot',
      component: RequestParkingLotComponent
    },
    /*{
      path: '**',
      component: NotFoundComponent
    }*/
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    MapComponent,
    NavigationComponent,
    AccountComponent,
    RequestParkingLotComponent,
    ParkingLotsListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    GoogleMapsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
