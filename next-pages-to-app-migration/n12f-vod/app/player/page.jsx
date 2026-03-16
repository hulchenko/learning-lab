// [Migration Challenge 10 - Update class component with legacy lifecycle to function component with hooks]
// [Migration Challenge 8 - Update global CSS import in page to global CSS import in layout.js/_app.js only]
// [Migration Challenge 1 - Update getInitialProps to getServerSideProps/getStaticProps/React Server Components]
import React from 'react';
import PlayerLayout from '../../components/PlayerLayout';
import RelatedVideos from "../../components/RelatedVideos";
import BackHomeButton from "../../components/BackHomeButton";
import getCurrentVideo from "../actions/getCurrentVideo";



export default async function Player({ searchParams }) {
  const { id } = await searchParams;
  const { videoUrl, videoTitle, fact, videoId } = await getCurrentVideo(id);

    return (
      <PlayerLayout props={{videoUrl, videoTitle, fact, chapterIdx}}>
        <RelatedVideos currentId={videoId} />
          <BackHomeButton />
      </PlayerLayout>
    );
}
