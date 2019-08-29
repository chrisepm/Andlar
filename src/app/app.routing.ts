import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from "@app/pages/pages.component";

export const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'author/:id', component: PagesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules
});
