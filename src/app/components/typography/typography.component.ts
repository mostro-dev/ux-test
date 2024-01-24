import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { TypographyVariants, TypographyWeights } from "./types";

@Component({
	selector: "app-typography",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./typography.component.html",
	styleUrl: "./typography.component.scss",
})
export class TypographyComponent {
	@Input() variant: TypographyVariants = "p";
	@Input() weight: TypographyWeights = "regular";
}
