import { Component } from "@angular/core";
import { LayoutComponent } from "../layout/layout.component";
import { TypographyComponent } from "../typography/typography.component";

@Component({
	selector: "app-menu-bar",
	standalone: true,
	imports: [LayoutComponent, TypographyComponent],
	templateUrl: "./menu-bar.component.html",
	styleUrl: "./menu-bar.component.scss",
})
export class MenuBarComponent {
	public isActive: boolean = false;

	toggleMenu() {
		this.isActive = !this.isActive;
	}
}
