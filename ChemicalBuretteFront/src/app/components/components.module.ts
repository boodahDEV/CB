import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Componentes
import { ContentComponent } from './content/content.component';
import { RefsComponent } from './refs/refs.component';
import { SabiasqueComponent } from './sabiasque/sabiasque.component';


@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [
      ContentComponent,
      RefsComponent,
      SabiasqueComponent
  ],
  providers: [],
  exports: [
    ContentComponent,
    RefsComponent,
    SabiasqueComponent
  ]
})
export class ComponentsModule { }
