import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Random from "../Random";

describe("Random Component Test", () => {
	test("Renders correctly", () => {
		render(<Random />);
		const element = screen.getByText(/random/i);
		expect(element).toBeInTheDocument();
	});
});
