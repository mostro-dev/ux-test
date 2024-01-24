import { Component, Input } from "@angular/core";
import { ButtonVariants } from "./types";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-button",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./button.component.html",
	styleUrl: "./button.component.scss",
})
export class ButtonComponent {
	@Input() variant: ButtonVariants = "primary";
}
