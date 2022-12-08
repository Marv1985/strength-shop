import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Search from "/home/marv/react-projects/strength-shop/src/HomePage/NavBar/Components/Search.js";

describe("Search bar functionality", () => {
  it("input field changes", () => {
    render(<Search />);
    const input = screen.getByPlaceholderText("What are you looking for?");
    fireEvent.change(input, { target: { value: "protein" } });
    expect(input.value).toBe("protein");
  });
});
