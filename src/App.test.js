import { render, screen, fireEvent, act } from "@testing-library/react";
import RankingTable from "./components/RankingTable";
import App from "./App";

jest.useFakeTimers();
const mockRanking = [
  { name: "Player1", stars: 10, time: 30 },
  { name: "Player2", stars: 10, time: 30 },
  { name: "Player3", stars: 9, time: 50 },
  { name: "Player4", stars: 8, time: 40 },
  { name: "Player5", stars: 7, time: 25 },
  { name: "Player6", stars: 6, time: 20 },
];

test("displays only 5 players per page", () => {
  render(<RankingTable ranking={mockRanking} />);
  expect(screen.getAllByRole("row")).toHaveLength(6); // 5 players + header
});

test("Next button should be disabled on the last page", () => {
  render(<RankingTable ranking={mockRanking} />);
  fireEvent.click(screen.getByText("Next"));
  expect(screen.getByText("Next")).toBeDisabled();
});

test("Previous button should be disabled on the first page", () => {
  render(<RankingTable ranking={mockRanking} />);
  expect(screen.getByText("Previous")).toBeDisabled();
});

test("navigates between pages", () => {
  render(<RankingTable ranking={mockRanking} />);
  fireEvent.click(screen.getByText("Next"));
  expect(screen.getByText("Player6")).toBeInTheDocument();
});

test("starts the game on button click", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Start Game"));
  expect(screen.getByText(/Time:/)).toBeInTheDocument();
});

test("decreases fuel over time", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Start Game"));
  act(() => {
    jest.advanceTimersByTime(3000);
  });
  expect(screen.getByText(/Fuel: 7/)).toBeInTheDocument();
});
