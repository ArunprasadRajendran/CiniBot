import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./pages/otp/otp.module').then(m => m.OtpPageModule)
  },
  {
    path: 'createaccount',
    loadChildren: () => import('./pages/createaccount/createaccount.module').then(m => m.CreateaccountPageModule)
  },
  {
    path: 'moviedetails',
    loadChildren: () => import('./pages/moviedetails/moviedetails.module').then(m => m.MoviedetailsPageModule)
  },
  {
    path: 'movietimeslot',
    loadChildren: () => import('./pages/movietimeslot/movietimeslot.module').then(m => m.MovietimeslotPageModule)
  },
  {
    path: 'seat',
    loadChildren: () => import('./pages/seat/seat.module').then(m => m.SeatPageModule)
  },
  {
    path: 'orderconfirmation',
    loadChildren: () => import('./pages/orderconfirmation/orderconfirmation.module').then(m => m.OrderconfirmationPageModule)
  },
  {
    path: 'ordersuccess',
    loadChildren: () => import('./pages/ordersuccess/ordersuccess.module').then(m => m.OrdersuccessPageModule)
  },
  {
    path: 'orderfailed',
    loadChildren: () => import('./pages/orderfailed/orderfailed.module').then(m => m.OrderfailedPageModule)
  },
  {
    path: 'orderdetailsuccess',
    loadChildren: () => import('./pages/orderdetailsuccess/orderdetailsuccess.module').then(m => m.OrderdetailsuccessPageModule)
  },
  {
    path: 'orderdetailfailed',
    loadChildren: () => import('./pages/orderdetailfailed/orderdetailfailed.module').then(m => m.OrderdetailfailedPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
