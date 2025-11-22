import { render, screen } from "@testing-library/react";
import Sandbox from "./Sandbox";

describe("01-search-by-text", () => {
	test("Demostrates different query methods", async () => {
		render(<Sandbox />);
    screen.debug();

    // 1. Get by text
    // const heading = screen.getByText('React Testing Library Examples');
    // expect(heading).toBeInTheDocument();

    expect(screen.getByText(/react/i)).toBeInTheDocument();

    // REGEX for phone numbers
    const phoneRegex = /\d{3}-\d{3}-\d{4}/
    const phoneText = screen.getByText(phoneRegex);
    expect(phoneText).toBeInTheDocument();

    const errorMessage = screen.queryByText('Error Message!');
    expect(errorMessage).not.toBeInTheDocument();

    // Multiple Items:
    const items = screen.getAllByText('Item 1');
    expect(items).toHaveLength(4);

    // Find By Text for async functionality
    const asyncMessage = await screen.findByText('Async message');
    expect(asyncMessage).toBeInTheDocument();
	});
});
