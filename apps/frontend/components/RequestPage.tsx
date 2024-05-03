import { useState, useCallback, useEffect } from "react";
import { RequestItem, getRequests } from "../client/client";
import RequestTemplate from "./RequestTemplate";

// Our container component to handle data
// I'd probably use Zustand to do this if we had more than two hours

const RequestPage = () => {
  const [requests, setRequests] = useState<RequestItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const initRequests = useCallback(async () => {
    setIsLoading(true);
    const requests = await getRequests();
    requests && requests.length ? setRequests(requests) : setIsError(true);
    setIsLoading(false);
  }, []);

  // If we're in dev mode and strict is on, this will fire twice
  useEffect(() => {
    initRequests();
  }, []);

  return (
    <RequestTemplate
      requests={requests}
      isLoading={isLoading}
      isError={isError}
    />
  );

};

export default RequestPage;
