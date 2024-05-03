import { RequestItem } from "../client/client";
import RequestList from "./RequestList";

// Our presentational requests component.

interface RequestsTemplateProps {
  requests: RequestItem[];
  isLoading: boolean;
  isError: boolean;
};

const RequestTemplate = ({requests, isLoading, isError}: RequestsTemplateProps) => {
  // These would all be proper components in a proper work project
  // This satisfies the acceptance criteria, so it's fine
  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  if (requests.length === 0) return <div>No requests</div>;

  return (
    <RequestList requests={requests} />
  );
};

export default RequestTemplate;