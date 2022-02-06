import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AppMaterialModule } from './../../shared/app-material/app-material.module'
import { ComponentsModule } from './../../shared/components/components.module'
import { ListComponent } from './list/list.component'
import { LocationsRoutingModule } from './locations-routing.module'

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, LocationsRoutingModule, AppMaterialModule, ComponentsModule],
})
export class LocationsModule {}
