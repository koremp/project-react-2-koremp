import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { get } from '../utils';

import {
  loadSong,
} from '../slice';

import SongInfo from '../container/SongInfo';
import SongMusicVideo from '../container/SongMusicVideo';
import SongCheerVideo from '../container/SongCheerVideo';

export default function Song({ match }) {
  // match.params.id 가 0이면 parseInt시 10으로 반환;
  const songId = parseInt(10, match.params.id);

  if (songId <= 0 || songId >= 21) {
    return (
      <p>no song in this id</p>
    );
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSong({ songId }));
  }, [songId]);

  const song = useSelector(get('song'));

  return (
    <>
      {
        song
          ? (
            <div>
              <SongInfo id={song.id} name={song.name} artist={song.artist} agency={song.agency} />
              <SongMusicVideo name={song.name} mvUrl={song.mvUrl} />
              <SongCheerVideo name={song.name} cheerUrl={song.cheerUrl} />
            </div>
          )
          : <p>loading</p>
      }
    </>
  );
}
