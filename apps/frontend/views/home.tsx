import RequestPage from "../components/RequestPage";


// I'm going to use this HomeView component to set up the page skeleton
// If this was a proper work project, we'd stick navigation here

export const HomeView = () => {
  return (
    <div>
      <h2>Request List</h2>
      <RequestPage />
    </div>
  );
};
