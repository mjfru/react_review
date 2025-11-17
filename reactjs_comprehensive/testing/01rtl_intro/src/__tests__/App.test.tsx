import { render, screen } from "@testing-library/react";
// Note: technically already available globally
import { test, expect } from "vitest";
import App from "../App";

describe("App Component", () => {
	// Test if heading renders correctly:
	// test_function(a string description of the test, callback function)
	test("should render heading with correct text", () => {
		// Render/Mounts the App component in a simulated browser environment
		render(<App />);

		// Log the DOM tree for debugging; helps to visualize component structure
		screen.debug();

		// Find heading by its text content
		// const heading = screen.getByText("React Testing Library");

		// Starting our assertion - Verifying the heading exists in document
		// expect(heading).toBeInTheDocument();
		expect(screen.getByText("React Testing Library")).toBeInTheDocument();
	});

	test("this empty test will pass", () => {
		// Empty Test - Will Pass!
	});

	test("this empty test will pass too", () => {
		const sum = 1 + 1;
		expect(sum).toBe(2);
	});

	test("Should render paragraph with correct text", () => {
		render(<App />);
		expect(screen.getByText(/library and vitest/i)).toBeInTheDocument();
	});
});
