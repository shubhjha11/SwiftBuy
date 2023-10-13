import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from 'src/package/core/core.module';
import { Router, RouterModule, Scroll } from '@angular/router';
import { DashboardModule } from 'src/package/modules/dashboard/dashboard.module';
import { AuthenticationModule } from 'src/package/modules/authentication/authentication.module';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from 'src/package/modules/store/store.module';
import { CartModule } from 'src/package/modules/cart/cart.module';
import { ViewportScroller } from '@angular/common';
import { filter, pairwise } from 'rxjs';
import { Event } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    CoreModule,
    DashboardModule,
    CartModule,
    StoreModule,
    AuthenticationModule,
    FontAwesomeModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private library: FaIconLibrary,
    private router: Router, 
    private viewportScroller: ViewportScroller
  ) {
    library.addIconPacks(fas, far, fab);
    this.viewportScroller.setHistoryScrollRestoration('manual');
    
    this.handleScrollOnNavigation();
  }

  /**
   * When route is changed, Angular interprets a simple query params change as "forward navigation" too.
   * Using the pairwise function allows us to have both the previous and current router events, which we can
   * use to effectively compare the two navigation events and see if they actually change route, or only
   * the route parameters (i.e. selections stored in query params).
   *
   * Related to: https://github.com/angular/angular/issues/26744
   */
  private handleScrollOnNavigation(): void {
    this.router.events.pipe(
      // import { Event } from '@angular/router'
      filter((e: Event): e is Scroll => e instanceof Scroll),
      pairwise()
    ).subscribe((e: Scroll[]) => {
      const previous = e[0];
      const current = e[1];
      if (current.position) {
        // Backward navigation
        this.viewportScroller.scrollToPosition(current.position);
      } else if (current.anchor) {
        // Anchor navigation
        this.viewportScroller.scrollToAnchor(current.anchor);
      } else {
        // Check if routes match, or if it is only a query param change
        if (this.getBaseRoute(previous.routerEvent.urlAfterRedirects) !== this.getBaseRoute(current.routerEvent.urlAfterRedirects)) {
          // Routes don't match, this is actual forward navigation
          // Default behavior: scroll to top
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      }
    });
  }

  private getBaseRoute(url: string): string {
    // return url without query params
    return url.split('?')[0];
  }
}
