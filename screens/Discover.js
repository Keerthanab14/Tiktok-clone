import React, { useEffect, useState, useRef } from 'react';

import VideosContainer from '../components/VideosContainer';

const DiscoverScreen = ({ navigation }) => {
  const [videos, setVideos] = useState([]);
  const page = useRef(0);

  const getData = async () => {
    const res = await fetch(
      'https://europe-west1-boom-dev-7ad08.cloudfunctions.net/videoFeed',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: { "page": 0 },
        response:
[
    { playbackUrl: "https://stream.xyz.com/stream1.m3u8" },
    { playbackUrl: "https://stream.xyz.com/stream2.m3u8" },
    { playbackUrl: "https://stream.xyz.com/stream3.m3u8" },
    { playbackUrl: "https://stream.xyz.com/stream4.m3u8" },
    { playbackUrl: "https://stream.xyz.com/stream5.m3u8" }
  ],
  Request: 'POST',
Body: { "page": 1 },
Response:
[
    { playbackUrl: "https://stream.xyz.com/stream6.m3u8" },
    { playbackUrl: "https://stream.xyz.com/stream7.m3u8" },
    { playbackUrl: "https://stream.xyz.com/stream8.m3u8" },
    { playbackUrl: "https://stream.xyz.com/stream9.m3u8" },
    { playbackUrl: "https://stream.xyz.com/stream10.m3u8" }
]
      }
    );

    const jsonData = await res.json();

    page.current++;

    setVideos(vids => [...vids, ...jsonData]);
  };

  useEffect(() => {
    if (!videos.length) getData();
  });

  return (
    <VideosContainer
      videos={videos}
      navigation={navigation}
      onEndReached={getData}
    />
  );
};

export default DiscoverScreen;
