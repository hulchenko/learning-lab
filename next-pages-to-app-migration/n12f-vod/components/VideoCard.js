"use client";

import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";

export function VideoCard({card}) {
    const router = useRouter();
    const handleFullScreenMode = (id) => {
      router.push(`/fullscreen-player?id=${id}`);
    };
    return (
        <div key={card.id} className={styles.card} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          <h2 style={{ width: '100%', color: '#fff', fontSize: '2.25rem', margin: '0 0 0.5rem 0', textAlign: 'left', fontWeight: 'bold', background: 'transparent', paddingLeft: '4px', letterSpacing: '1px' }}>Course: {card.title}</h2>
          <Image src="https://placecage.lucidinternets.com/800/450" alt="Nicolas Cage" width={800} height={450} style={{ borderRadius: '8px', width: '100%', height: 'auto' }} />
          <p style={{ marginTop: '1rem' }}>{card.fact}</p>
          {/* Legacy next/link usage */}
          <Link href={`/player?id=${card.id}`}>
            <div
              style={{ background: '#fb42b2', borderRadius: 16, padding: 16, marginTop: 16, width: '100%', textAlign: 'center', cursor: 'pointer' }}
              tabIndex={0}
              role="button"
            >
              <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fff' }}>Go to Movie</div>
            </div>
          </Link>
          {/* Legacy Router.push usage */}
          <div
            style={{ background: '#fb42b2', borderRadius: 16, padding: 16, marginTop: 16, width: '100%', textAlign: 'center', cursor: 'pointer' }}
            tabIndex={0}
            role="button"
            onClick={() => handleFullScreenMode(card.id)}
          >
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fff' }}>Watch Now</div>
          </div>
        </div>
    )
}