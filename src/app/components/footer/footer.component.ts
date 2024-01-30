import { Component } from "@angular/core";
import { TypographyComponent } from "../typography/typography.component";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "../layout/layout.component";

@Component({
	selector: "app-footer",
	standalone: true,
	imports: [CommonModule, TypographyComponent, LayoutComponent],
	templateUrl: "./footer.component.html",
	styleUrl: "./footer.component.scss",
})
export class FooterComponent {
	public footerData = {
		social: [
			{ icon: "social-logos/social_logo_twitter.svg", href: "/", name: "Twitter link" },
			{ icon: "social-logos/social_logo_facebook.svg", href: "/", name: "Facebook link" },
			{ icon: "social-logos/social_logo_youtube.svg", href: "/", name: "Youtube link" },
		],
		lists: [
			{
				title: "Destinations",
				data: [
					{ name: "Madrid", href: "/" },
					{ name: "Barcelona", href: "/" },
					{ name: "London", href: "/" },
					{ name: "Paris", href: "/" },
					{ name: "Rome", href: "/" },
				],
			},
			{
				title: "Legal information",
				data: [
					{ name: "Privacy policy", href: "/" },
					{ name: "Cookie policies", href: "/" },
					{ name: "Data treatment", href: "/" },
				],
			},
			{
				title: "Book your flight",
				data: [
					{ name: "Search flights", href: "/" },
					{ name: "Price calendar", href: "/" },
					{ name: "Destination map", href: "/" },
					{ name: "Flight times", href: "/" },
				],
			},
		],
		sitemap: [
			{ name: "Website terms of use", href: "/" },
			{ name: "Site map", href: "/" },
			{ name: "Enviroment", href: "/" },
		],
	};
}
