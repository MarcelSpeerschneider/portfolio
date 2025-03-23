// src/app/guards/route-debug.guard.ts
import { CanActivateFn } from '@angular/router';

export const routeDebugGuard: CanActivateFn = (route, state) => {
  console.log('----------------------');
  console.log('🔍 Router-Debug:');
  console.log('URL:', state.url);
  console.log('Route Config:', route.routeConfig);
  console.log('Route Params:', route.params);
  console.log('Query Params:', route.queryParams); 
  console.log('----------------------');
  return true;
};