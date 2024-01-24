import { Component } from "@angular/core";
import { ButtonComponent } from "../../components/button/button.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { LayoutComponent } from "../../components/layout/layout.component";
import { TypographyComponent } from "../../components/typography/typography.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";


@Component({
	selector: "app-landing-page",
	standalone: true,
	imports: [TypographyComponent, ButtonComponent, FooterComponent, LayoutComponent, MenuBarComponent],
	templateUrl: "./landing-page.component.html",
	styleUrl: "./landing-page.component.scss",
})
export class LandingPageComponent {}
