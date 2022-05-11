import { render, screen, fireEvent } from "@testing-library/react";
import Request from "./Request";
import { singleMockData } from "../../mockData";

const mockedFn = jest.fn();

describe("Single Request component", () => {
  test("Decline Friend Request", () => {
    const { unmount } = render(
      <Request
        index={0}
        key={0}
        {...singleMockData}
        removefriendRequest={mockedFn}
      />
    );
    
    const declineButton = screen.getByText(/decline/i);
    fireEvent.click(declineButton);
    unmount();
  });
});
