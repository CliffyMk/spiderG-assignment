import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedService, LocalStorageService } from './services/index';

@NgModule({
  imports: [CommonModule],
  providers: [SharedService, LocalStorageService]
})

export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }


}