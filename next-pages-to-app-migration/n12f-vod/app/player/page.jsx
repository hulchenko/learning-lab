import React from 'react';
import PlayerLayout from '../../components/PlayerLayout';
import RelatedVideos from "../../components/RelatedVideos";
import BackHomeButton from "../../components/BackHomeButton";
import getCurrentVideo from "../actions/getCurrentVideo";



export default async function Player({ searchParams }) {
  const { id } = await searchParams;
  const { videoUrl, videoTitle, fact, videoId } = await getCurrentVideo(id);

    return (
      <PlayerLayout props={{videoUrl, videoTitle, fact, id}}>
        <RelatedVideos currentId={videoId} />
          <BackHomeButton />
      </PlayerLayout>
    );
}
