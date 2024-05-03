import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import RequestPage from './RequestPage';
import * as client from '../client/client';

jest.mock('../client/client');

describe('The RequestPage component', () => {
  //just testing the client actually gets called here since we test behaviour further down
  it('calls the clients getRequests function to fetch data only once upon being rendered', async () => {
    //arrange
    jest.spyOn(client, 'getRequests');
    //act
    render(<RequestPage />);
    await screen.findByText('Error');
  
    //assert
    expect(client.getRequests).toHaveBeenCalledTimes(1);
  });
});
