import { useEffect, useState } from "react";
import { RequestItem } from "../client/client";
import RequestCard from "./RequestCard";
import styles from './RequestList.module.css'

interface RequestListProps {
  requests: RequestItem[];
};

// Takes and renders an array of request cards.
// Contains logic to handle pagination and sorting.
// This would, naturally, be vastly more complex in a real project.

const RequestList = ({requests}: RequestListProps) => {
  const [sortedList, setSortedList] = useState<RequestItem[]>([]);
  const [cursor, setCursor] = useState<number>(0);

  useEffect(() => {
    setSortedList(requests.sort((a, b) => b.createdAt - a.createdAt));
  }, [requests]);

  const prevClickHandler = () => {
    setCursor(cursor - 10);
  };

  const nextClickHandler = () => {
    setCursor(cursor + 10);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {sortedList.slice(cursor, cursor + 10).map((request, index) => {
          return (
            <RequestCard request={request} key={index} />
          );
        })}
      </div>
      <div className={styles.pagination}>
        <div>
          <button disabled={cursor === 0} onClick={prevClickHandler}>Previous Page</button>
          <button disabled={(sortedList.length - cursor) <= 10} onClick={nextClickHandler}>Next Page</button>
        </div>
        <div>{`Page ${(cursor + 10) / 10} of ${Math.ceil((sortedList.length) / 10)}`}</div>
      </div>
    </div>
  );
};

export default RequestList;