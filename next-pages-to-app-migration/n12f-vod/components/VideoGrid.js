import styles from '../styles/Home.module.css';
import { VideoCard } from './VideoCard';

export default function VideoGrid({ data }) {
  return (
    <div className={styles.grid} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
      {data.map(card => (
        <VideoCard card={card} key={card.id} />
      ))}
    </div>
  );
}
