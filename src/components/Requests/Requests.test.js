import axios from "axios";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Requests from "./Requests";

describe("Requests page", () => {
  test("Renders Requests component", () => {
    render(<Requests />);

    waitForElementToBeRemoved(() => screen.getByText(/Loading.../i));
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test("Find first index", async () => {
    render(<Requests />);

    const firstRequest = await screen.findByTestId(/request-0/i);

    expect(firstRequest).toBeInTheDocument();
  });

  test("Refresh Button", async () => {
    // declare empty value
    const value = {
      data: {
        results: [],
      },
    };
    // mock axios.get to return an empty array
    axios.get.mockResolvedValueOnce(value);

    render(<Requests />);
    await waitForElementToBeRemoved(() => screen.getByText(/Loading.../i));

    const refreshButton = screen.getByText(/refresh/i);

    fireEvent.click(refreshButton);
    await waitFor(() => {
      expect(screen.getByText(/friend requests/i)).toBeInTheDocument();
    });
  });
});
