import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate {

	canActivate(route: ActivatedRouteSnapshot): boolean {
		let id = +route.url[1].path;
		if (isNaN(id) || id <1) {
			alert('Invalid product Id');
			// start new navigation to redirect to the list page
			this._router.navigate(['/products']);
			return false;
		};

		return true;
	}
}