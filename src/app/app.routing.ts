/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import {RowingComponent} from "./rowing/rowing.component";
import {GeekyComponent} from "./geeky/geeky.component";

export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'rowing', component: RowingComponent},
    {path: 'geeky', component: GeekyComponent},
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
