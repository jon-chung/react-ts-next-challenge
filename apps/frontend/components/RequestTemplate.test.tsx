import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import RequestTemplate from './RequestTemplate';

describe('The RequestTemplate component', () => {
  it('displays a RequestList if there are no errors, we are not loading, and there is at least one request', async () => {
    //arrange
    const mockRequests = [{
      "id": "106aaa8c-79c1-4426-b77d-a7dbe33bd7cb",
      "title": "Environmental Law Advisory and Representation Services",
      "author": "Michael Williams",
      "createdAt": 1719783700,
      "published": false,
      "auction": false
    }];    

    //act
    render(<RequestTemplate requests={mockRequests} isLoading={false} isError={false} />);
  
    //assert
    expect(screen.getByText('Environmental Law Advisory and Representation Services')).toBeInTheDocument();
    expect(screen.getByText('Wednesday, Jan 21, 1970, 7:43:03 AM')).toBeInTheDocument();
    expect(screen.getByText('Michael Williams')).toBeInTheDocument();
  });

  it('displays the text "Error" if there is an error', () => {
    //arrange
    //act
    render(<RequestTemplate requests={[]} isLoading={false} isError={true} />);

     //assert
     expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('displays the text "Loading" if we are loading data', () => {
    //arrange
    //act
    render(<RequestTemplate requests={[]} isLoading={true} isError={false} />);

     //assert
     expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  it('displays the text "No requests" if we simply have no requests', () => {
    //arrange
    //act
    render(<RequestTemplate requests={[]} isLoading={false} isError={false} />);

     //assert
     expect(screen.getByText('No requests')).toBeInTheDocument();
  });
});
