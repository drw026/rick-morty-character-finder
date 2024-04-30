import { render, screen } from "@testing-library/react";
import { Pagination } from "@/components/Pagination/Pagination.tsx";

describe('Pagination', () => {
  it("should render without crashing", () => {
    render(
      <Pagination
        next={2}
        previous={0}
        pages={3}
        current={1}
        navigateToPageNumber={jest.fn()}
      />,
    );
  });

  it('should show all buttons', () => {
    render(
      <Pagination
        next={3}
        previous={1}
        pages={3}
        current={2}
        navigateToPageNumber={jest.fn()}
      />,
    );

    expect(screen.getByLabelText('Go to next page')).toBeVisible();
    expect(screen.getByLabelText('Go to previous page')).toBeVisible();
    expect(screen.getByText('1')).toBeVisible();
    expect(screen.getByText('2')).toBeVisible();
    expect(screen.getByText('3')).toBeVisible();
  });

  it('should not show next and previous when there is only 1 page', () => {
    render(
      <Pagination
        next={0}
        previous={0}
        pages={1}
        current={1}
        navigateToPageNumber={jest.fn()}
      />,
    );

    expect(screen.queryByLabelText('Go to next page')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Go to previous page')).not.toBeInTheDocument();
    expect(screen.getByText('1')).toBeVisible();
  })
});
