// Render all three pages on the server when they are requested directly.
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    // Generate static HTML that GitHub Pages can host.
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
