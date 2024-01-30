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

	public menuItems = [
		{
			id: 0,
			label: "Check-in",
			subItems: [
				{ id: 0, label: "My Orders", href: "/" },
				{ id: 1, label: "Check-in", href: "/" },
			],
		},
		{
			id: 1,
			label: "Manage my booking",
			subItems: [{ id: 0, label: "My booking", href: "/" }],
		},
		{
			id: 2,
			label: "Information",
			subItems: [
				{ id: 0, label: "Help Center", href: "/" },
				{ id: 1, label: "Flight state", href: "/" },
				{ id: 2, label: "Airplanes", href: "/" },
				{ id: 3, label: "Routes", href: "/" },
			],
		},
	];

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
