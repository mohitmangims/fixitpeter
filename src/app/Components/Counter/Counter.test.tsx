// Counter.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("renders Counter component with initial count", () => {
  render(<Counter />);
  expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 0");
});

test("increments the counter", () => {
  render(<Counter />);
  fireEvent.click(screen.getByTestId("increment-btn"));
  expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 1");
});

test("decrements the counter but does not go below zero", () => {
  render(<Counter />);
  fireEvent.click(screen.getByTestId("decrement-btn"));
  expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 0");
  fireEvent.click(screen.getByTestId("increment-btn"));
  fireEvent.click(screen.getByTestId("decrement-btn"));
  expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 0");
});

test("resets the counter", () => {
  render(<Counter />);
  fireEvent.click(screen.getByTestId("increment-btn"));
  fireEvent.click(screen.getByTestId("increment-btn"));
  fireEvent.click(screen.getByTestId("reset-btn"));
  expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 0");
});
