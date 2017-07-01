import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PersonFormGeneratorProvider } from '../providers/person-form-generator/person-form-generator';
import { VehicleFormGeneratorProvider } from '../providers/vehicle-form-generator/vehicle-form-generator';
import { AddressFormGeneratorProvider } from '../providers/address-form-generator/address-form-generator';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
    PersonFormGeneratorProvider,
    VehicleFormGeneratorProvider,
    AddressFormGeneratorProvider
  ]
})
export class AppModule {}
