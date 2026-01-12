import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("should render with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("should render primary variant by default", () => {
    render(<Button>Primary</Button>);
    const button = screen.getByText("Primary");
    expect(button).toHaveClass("bg-blue-500");
  });

  it("should call onClick handler", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should throw error when clicking non-existent button", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    expect(() => {
      screen.getByText("asadsagfas");
    }).toThrow();
  });
});
