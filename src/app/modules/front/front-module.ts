import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing-module';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { HomePage } from './pages/home-page/home-page';

@NgModule({
  declarations: [Navbar, Footer, HomePage],
  imports: [CommonModule, FrontRoutingModule],
})
export class FrontModule {}
