import { Component } from "@angular/core";
import { ButtonComponent } from "../../components/button/button.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { LayoutComponent } from "../../components/layout/layout.component";
import { TypographyComponent } from "../../components/typography/typography.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { CardComponent } from "../../components/card/card.component";
import { CityPromo } from "./types";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-landing-page",
	standalone: true,
	imports: [
		CommonModule,
		TypographyComponent,
		ButtonComponent,
		FooterComponent,
		LayoutComponent,
		MenuBarComponent,
		CardComponent,
	],
	templateUrl: "./landing-page.component.html",
	styleUrl: "./landing-page.component.scss",
})
export class LandingPageComponent {
	cardData: Array<CityPromo> = [
		{ city: "Chicago", price: "600", priceCents: "00", img: "chicago.jpeg" },
		{ city: "Porto", price: "600", priceCents: "00", img: "chicago_2.jpeg" },
		{ city: "Chicago", price: "600", priceCents: "00", img: "porto.jpeg" },
	];
}
