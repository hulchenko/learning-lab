import VideoPlayer from '../../components/VideoPlayer';
import BackHomeButton from '../../components/BackHomeButton';
import getCurrentVideo from '../actions/getCurrentVideo';

export default async function FullscreenPlayer({ searchParams }) {
  const { id } = await searchParams;
  const { videoUrl } = await getCurrentVideo(id);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{ width: 1920, height: 1080, background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 32px #fb42b2' }}>
          <VideoPlayer src={videoUrl} />
        </div>
      <BackHomeButton />
    </div>
  );
}