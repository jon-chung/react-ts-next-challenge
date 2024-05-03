import { RequestItem } from "../client/client";
import styles from './RequestCard.module.css';

interface RequestCardProps {
  request: RequestItem;
}

// Takes and blindly renders a request as a card.
const RequestCard = ({request}: RequestCardProps) => {

  const requestDate = new Date(request.createdAt);

  const formattedDate = requestDate.toLocaleDateString(
    'en-us',
    {
      weekday:"long",
      year:"numeric",
      month:"short",
      day:"numeric"
    }
  );

  const formattedTime = requestDate.toLocaleTimeString('en-US');
  
  return (
    <div className={styles.card}>
      <h4>{`${request.title}`}</h4>
      <p>{`${formattedDate}, ${formattedTime}`}</p>
      <p>{`${request.author}`}</p>
    </div>
  );
};

export default RequestCard;