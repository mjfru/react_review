import { render, screen } from "@testing-library/react";
// Note: technically already available globally
import { test, expect } from "vitest";
import App from "../App";

// Test if heading renders correctly:
// test_function(a string description of the test, callback function)
test("should render heading with correct text", () => {
	// Render/Mounts the App component in a simulated browser environment
	render(<App />);

	// Log the DOM tree for debugging; helps to visualize component structure
	screen.debug();

	// Find heading by its text content
	const heading = screen.getByText("React Testing Library");

	// Starting our assertion - Verifying the heading exists in document
	expect(heading).toBeInTheDocument();
});
