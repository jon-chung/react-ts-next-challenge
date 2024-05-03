import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import RequestList from './RequestList';

const sampleMockRequest = {
  "id": "106aaa8c-79c1-4426-b77d-a7dbe33bd7cb",
  "title": "Environmental Law Advisory and Representation Services",
  "author": "Michael Williams",
  "createdAt": 1719783700,
  "published": false,
  "auction": false
};

describe('The RequestList component', () => {
  it('displays requests in the correctly sorted order of desc by creation date', () => {
    //arrange
    const mockRequests = [
      {
        "id": "106aaa8c-79c1-4426-b77d-a7dbe33bd7cb",
        "title": "Environmental Law Advisory and Representation Services A",
        "author": "Michael Williams A",
        "createdAt": 1719783701,
        "published": false,
        "auction": false
      },
      {
        "id": "106aaa8c-79c1-4426-b77d-a7dbe33bd7cb",
        "title": "Environmental Law Advisory and Representation Services B",
        "author": "Michael Williams B",
        "createdAt": 1719783700,
        "published": false,
        "auction": false
      }
    ];

    //act
    render(<RequestList requests={mockRequests} />);
    const a = screen.getByText('Michael Williams A');
    const b = screen.getByText('Michael Williams B');

    //assert
    expect(a).toBeInTheDocument();
    expect(b).toBeInTheDocument();
    expect(a.compareDocumentPosition(b)).toBe(4); //4 is Node.DOCUMENT_POSITION_FOLLOWING
  });

  it('displays the correct number of pages when given a number of requests less than 10', () => {
    //arrange
    const mockRequests = Array(9).fill(sampleMockRequest);

    //act
    render(<RequestList requests={mockRequests} />);

    //assert
    expect(screen.getByText('Page 1 of 1')).toBeInTheDocument();
  });

  it('displays the correct number of pages when given a number of requests greater than 10', () => {
    //arrange
    const mockRequests = Array(20).fill(sampleMockRequest);

    //act
    render(<RequestList requests={mockRequests} />);

    //assert
    expect(screen.getByText('Page 1 of 2')).toBeInTheDocument();
  });

  it('correctly disables the previous page button when on the first page', () => {
    //arrange
    const mockRequests = [sampleMockRequest];

    //act
    render(<RequestList requests={mockRequests} />);
    const prev = screen.getByText('Previous Page');

    //assert
    expect(screen.getByText('Previous Page')).toBeDisabled();
  });

  it('correctly disables the next page button when on the last page', () => {
    //arrange

    //if the array has one item, the first page is also the last page
    //so we can do this without any clicks, which makes this a cheap test
    const mockRequests = [sampleMockRequest];

    //act
    render(<RequestList requests={mockRequests} />);
    const next = screen.getByText('Next Page');

    //assert
    expect(screen.getByText('Next Page')).toBeDisabled();
  });

  it('correctly advances to the next page if 2 pages are present and the next page button is clicked', async () => {
    //arrange
    const mockRequests = Array(11).fill(sampleMockRequest);

    //act
    render(<RequestList requests={mockRequests} />);
    await userEvent.click(screen.getByText('Next Page'));

    //assert
    expect(screen.getByText('Page 2 of 2')).toBeInTheDocument();
  });
});
