import { Route } from '@angular/router';
import { LoginRoutes } from './login/index';
import { SignupRoutes } from './signup/index';
import { DashboardRoutes } from './dashboard/index';

export const ModulesRoutes: Route[] = [
  	...DashboardRoutes,
  	...LoginRoutes,
	...SignupRoutes	
];
