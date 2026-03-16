import { Suspense } from 'react';
import styles from '../styles/Player.module.css';
import { baseUrl } from "../constants";

async function RelatedVideosData({id}) {
  const res = await fetch(baseUrl + `/api/related-videos?id=${id}`);
  const data = await res.json();
  return (
    <>
      {data.map(video => (
        <a
          key={video.id}
          href={`/player?id=${video.id}`}
          className={styles.card}
          style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', background: '#222', borderRadius: 12, padding: 16, textDecoration: 'none' }}
        >
          <h3 style={{ width: '100%', color: '#fff', fontSize: '1.5rem', margin: '0 0 0.5rem 0', textAlign: 'left', fontWeight: 'bold', background: 'transparent', paddingLeft: '4px', letterSpacing: '1px' }}>{video.title}</h3>
          <p style={{ color: '#fff', fontSize: '1rem', margin: 0 }}>{video.fact.slice(0, 80)}...</p>
        </a>
      ))}
    </>
  )
}

export default function RelatedVideos({ currentId }) {
  return (
    <div style={{ marginTop: '3rem' }}>
      <h2 style={{ color: '#fb42b2', fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>Related Videos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', margin: '0 auto', maxWidth: '1200px' }}>
        <Suspense fallback={<div style={{ color: '#fb42b2', textAlign: 'center', fontSize: '1.5rem' }}>Loading related videos...</div>}>
          <RelatedVideosData id={currentId}/>
        </Suspense>
      </div>
    </div>
  );
}
