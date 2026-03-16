import styles from '../styles/Home.module.css';
import VideoGrid from '../components/VideoGrid';
import { Suspense } from 'react';
import { baseUrl } from '../constants';

export const metadata = {
  title: "Nicolas Cage VOD",
  description: "Nicolas Cage Video On Demand"
}

async function VideoData({children}) {
  const res = await fetch(baseUrl  + '/api/all-videos');
  const data = await res.json();
  return (
    <VideoGrid data={data}>
      {children}
    </VideoGrid>
  )
}


export default function Home() {
  console.log("HOME LOADED");
  return (
    <div className={styles.container}>
      {/* Top Banner */}
      <div style={{ width: '100%', height: '400px', background: '#fb42b2', paddingBottom: '2rem', marginBottom: '0' }}>
        <nav style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '1rem 0', borderBottom: 'none', background: 'transparent' }}>
          <a href="/" style={{ fontWeight: 'bold', fontSize: '1.25rem', textDecoration: 'none', color: '#fff', marginLeft: '1rem' }}>Home</a>
        </nav>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px' }}>
          <img src="/assets/logo.png" alt="Logo" style={{ width: '150%', height: '120%', objectFit: 'contain', marginBottom: '0' }} />
        </div>
      </div>

      <main className={styles.main}>
        <p className={styles.description}>
          Enjoy a curated selection of Nicolas Cage facts and videos. Click any card to watch!
        </p>
        <Suspense fallback={<div style={{ color: '#fb42b2', textAlign: 'center', fontSize: '1.5rem' }}>Loading videos...</div>}>
          <VideoData />
        </Suspense>
      </main>
    </div>
  );
}
