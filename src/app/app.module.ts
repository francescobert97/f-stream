import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar.component';
import { FooterComponent } from './layout/footer.component';
import { UikitModule } from './shared/uikit/uikit.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from './layout/components/logo.component';

@NgModule({ declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        LogoComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        UikitModule,
        ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
