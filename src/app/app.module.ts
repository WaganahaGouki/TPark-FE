import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterUserComponent} from './components/register-user/register-user.component';
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MapComponent} from './components/map/map.component';
import {RouterModule, Routes} from "@angular/router";
import {GoogleMapsModule} from "@angular/google-maps";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {NavigationComponent} from './components/navigation/navigation.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {AccountComponent} from './components/account/account.component';
import {RequestParkingLotComponent} from './components/request-parking-lot/request-parking-lot.component';
import {ParkingLotAddComponent} from './components/parking-lot-add/parking-lot-add.component';
import {NgOptimizedImage} from "@angular/common";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ParkingLotUpdateComponent} from './components/parking-lot-update/parking-lot-update.component';
import {ParkingLotDeleteComponent} from './components/parking-lot-delete/parking-lot-delete.component';
import {
  ParkingLotRequestDeleteComponent
} from './components/parking-lot-request-delete/parking-lot-request-delete.component';

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
  {
    path: 'addParkingLot',
    component: ParkingLotAddComponent
  },
  {
    path: 'updateParkingLot',
    component: ParkingLotUpdateComponent
  },
  {
    path: 'deleteParkingLot',
    component: ParkingLotDeleteComponent
  },
  {
    path: 'deleteParkingLotRequest',
    component: ParkingLotRequestDeleteComponent
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
    ParkingLotAddComponent,
    ParkingLotUpdateComponent,
    ParkingLotDeleteComponent,
    ParkingLotRequestDeleteComponent
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
    NgOptimizedImage,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
