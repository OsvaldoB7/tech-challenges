import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { EmptyState } from "./EmptyState";

describe("EmptyState", () => {
  it("should render title", () => {
    render(<EmptyState title="No results found" />);
    expect(screen.getByText("No results found")).toBeInTheDocument();
  });

  it("should render description when provided", () => {
    render(
      <EmptyState
        title="No results"
        description="Try a different search term"
      />
    );
    expect(screen.getByText("Try a different search term")).toBeInTheDocument();
  });

  it("should not render description when not provided", () => {
    render(<EmptyState title="No results" />);
    expect(
      screen.queryByText("Try a different search term")
    ).not.toBeInTheDocument();
  });
});
