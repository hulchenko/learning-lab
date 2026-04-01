import React from "react";
import PlayerLayout from "../../components/PlayerLayout";
import RelatedVideos from "../../components/RelatedVideos";
import BackHomeButton from "../../components/BackHomeButton";
import { Suspense } from "react";
import getCurrentVideo from "../actions/getCurrentVideo";

export default async function Player({ searchParams }) {
  const { id } = await searchParams;
  const video = getCurrentVideo(id);

  return (
    <Suspense fallback={<div style={{ color: "#fb42b2", textAlign: "center", fontSize: "1.5rem" }}>Loading player...</div>}>
      <PlayerLayout video={video}>
        <RelatedVideos id={id} />
        <BackHomeButton />
      </PlayerLayout>
    </Suspense>
  );
}
