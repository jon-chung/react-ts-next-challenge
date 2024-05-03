import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import RequestCard from './RequestCard';

describe('The RequestCard component', () => {
  it('displays the expected strings when rendered with a mocked request', async () => {
    //arrange
    const mockRequest = {
      "id": "106aaa8c-79c1-4426-b77d-a7dbe33bd7cb",
      "title": "Environmental Law Advisory and Representation Services",
      "author": "Michael Williams",
      "createdAt": 1719783700,
      "published": false,
      "auction": false
    };    

    //act
    render(<RequestCard request={mockRequest} />);
  
    //assert
    expect(screen.getByText('Environmental Law Advisory and Representation Services')).toBeInTheDocument();
    expect(screen.getByText('Wednesday, Jan 21, 1970, 7:43:03 AM')).toBeInTheDocument();
    expect(screen.getByText('Michael Williams')).toBeInTheDocument();
  });
});
