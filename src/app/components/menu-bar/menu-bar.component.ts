import { Component } from "@angular/core";
import { LayoutComponent } from "../layout/layout.component";
import { TypographyComponent } from "../typography/typography.component";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-menu-bar",
	standalone: true,
	imports: [CommonModule, LayoutComponent, TypographyComponent],
	templateUrl: "./menu-bar.component.html",
	styleUrl: "./menu-bar.component.scss",
})
export class MenuBarComponent {
	public isActive: boolean = false;
	public selectedMenuItem: number | null = null;

	toggleMenu() {
		this.isActive = !this.isActive;
	}

	selectMenuItem(index: number) {
		console.log(index);
		if (this.selectedMenuItem === index) {
			this.selectedMenuItem = null;
		} else {
			this.selectedMenuItem = index;
		}
	}

	getTypographyWeight(item: number) {
		return this.selectedMenuItem === item ? "bold" : "regular";
	}
}
