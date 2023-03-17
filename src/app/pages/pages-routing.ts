import { Routes } from '@angular/router'
import { PagesComponent } from './pages.component'

export const PagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
            }
        ],
    },
]
