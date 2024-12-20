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
  fireEvent.click(screen.getByTestId("increment-btn1"));
  expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 1");
});

test("increments the counter multiple times", () => {
  render(<Counter />);
  fireEvent.click(screen.getByTestId("increment-btn1"));
  fireEvent.click(screen.getByTestId("increment-btn1"));
  expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 2");
});

test("decrements the counter but does not go below zero", () => {
  render(<Counter />);
  fireEvent.click(screen.getByTestId("decrement-btn1"));
  expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 0");
  fireEvent.click(screen.getByTestId("increment-btn1"));
  fireEvent.click(screen.getByTestId("decrement-btn1"));
  expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 0");
});

test("multiple increments and decrements without going below zero", () => {
  render(<Counter />);
  fireEvent.click(screen.getByTestId("increment-btn1"));
  fireEvent.click(screen.getByTestId("increment-btn1"));
  fireEvent.click(screen.getByTestId("decrement-btn1"));
  fireEvent.click(screen.getByTestId("decrement-btn1"));
  fireEvent.click(screen.getByTestId("decrement-btn1"));  // extra decrement to test boundary
  expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 0");
});

test("resets the counter", () => {
  render(<Counter />);
  fireEvent.click(screen.getByTestId("increment-btn1"));
  fireEvent.click(screen.getByTestId("increment-btn1"));
  fireEvent.click(screen.getByTestId("reset-btn"));
  expect(screen.getByTestId("count-value")).toHaveTextContent("Count: 0");
});

