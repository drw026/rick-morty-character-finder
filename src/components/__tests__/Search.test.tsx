import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Search } from '@/components/Search/Search.tsx';

describe('Search', () => {
  it('should render without crashing', () => {
    render(<Search clickHandler={jest.fn()} />);
  });

  it('should render search button and blank search input', async () => {
    render(<Search clickHandler={jest.fn()} />)

    expect(screen.getByRole('button', { name: /Search/ })).toBeVisible();
    expect(screen.getByPlaceholderText('Find character...')).toBeVisible();
  });

  it('should call clickHandler when search input is filled and search button is clicked', async () => {
    const user = userEvent.setup();
    const clickHandler = jest.fn();

    render(<Search clickHandler={clickHandler} />);

    await user.type(
      screen.getByPlaceholderText('Find character...'),
      'Rick'
    );

    userEvent.click(screen.getByRole('button', { name: /Search/ }));

    await waitFor(() => {
      expect(clickHandler).toHaveBeenCalledWith('Rick');
      expect(screen.getByPlaceholderText('Find character...')).toHaveValue('Rick');
    });
  });

  it('should not call clickHandler when search input is empty', async () => {
    const clickHandler = jest.fn();

    render(<Search clickHandler={clickHandler} />);

    userEvent.click(screen.getByRole('button', { name: /Search/ }));

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Find character...')).toHaveValue('');
      expect(clickHandler).not.toHaveBeenCalled();
    });
  })
});
