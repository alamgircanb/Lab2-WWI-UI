import {
  RenderMode,
  ServerRoute,
} from '@angular/ssr';

/*
 * Prerender all application routes as static HTML
 * so they can be hosted on GitHub Pages.
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
