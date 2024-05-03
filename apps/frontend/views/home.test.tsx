import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {HomeView} from './home';

jest.mock('../client/client');

describe('The HomeView component', () => {
  it('correctly displays the page title "Request List" when rendered', async () => {
    //arrange

    //act
    render(<HomeView />);
    await screen.findByText('Error');
  
    //assert
    expect(screen.getByText('Request List')).toBeInTheDocument();
  });
});
