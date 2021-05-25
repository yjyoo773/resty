import React from "react";
import App from "../src/App";
import History from "../src/components/history/History";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Results from "../src/components/results/Results";

it("should render the history list of hit urls", async () => {
  let history = ["https://swapi.dev/api/", "https://swapi.dev/api/people"];
  render(<History history={history} />);
  screen.debug();
  let items =screen.getAllByRole('listitem')
  expect(items).toHaveLength(2)
//   expect(false).toBeFalsy();
});
