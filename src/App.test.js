import React from "react";
import App from "./App";
import History from "./components/history/History";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

it("should render the history list of hit urls", async () => {
  let history = ["https://swapi.dev/api/", "https://swapi.dev/api/people"];
  render(<History history={history} />);
  // screen.debug();
  let items = screen.getAllByRole("listitem");
  expect(items).toHaveLength(2);
  expect(items[0]).toHaveTextContent('https://swapi.dev/api/');
  expect(items[1]).toHaveTextContent("https://swapi.dev/api/people");
});
