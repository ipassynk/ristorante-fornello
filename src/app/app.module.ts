import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DataTableModule} from 'primeng/components/datatable/datatable';
import {DialogModule} from 'primeng/components/dialog/dialog';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemMenuDataService} from 'app/services/menu-data.service';
import {MenuService} from 'app/services/menu.service';

import {AppComponent} from './app.component';
import {JumbotronComponent} from './jumbotron/jumbotron.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MenuComponent} from './menu/menu.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './footer/footer.component';
import {AppRoutingModule} from 'app/app-routing.module';
import {CardListComponent} from './card-list/card-list.component';
import {CardContentDirective, CardDirective} from 'app/card-list/card.component';
import {FragmentDirective} from 'app/shared/fragment.directive';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    NavbarComponent,
    CardDirective,
    CardListComponent,
    CardContentDirective,
    MenuComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    FragmentDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemMenuDataService),
    DataTableModule,
    DialogModule,
    AppRoutingModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
