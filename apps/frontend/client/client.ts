export type RequestItem = {
  auction: boolean,
  author: string,
  createdAt: number,
  id: string;
  title: string;
};

// If this was a full-on work card, this would probably be considerably more complex
// But since we only have an hour or two, and we're reading from a file, let's just
// return the file, with error handling so we can test everything.

export const getRequests = async () => {
  let json;
  try{
    const response = await fetch('http://localhost:3001/requests');
    if(!response?.ok){
      throw new Error("Not 2xx response");
    }
    json = await response.json();
  }catch(error){
    console.error(error);
  };

  if(json) return json;
  return null;
};