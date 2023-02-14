import React from "react";
import Button from "./Button";

import { useFetchAlbumsQuery, useAddAlbumsMutation } from "../store";

export default function AlbumsList({ user }) {
  const { data, isFetching, error } = useFetchAlbumsQuery(user);
  const [addAlbums, results] = useAddAlbumsMutation();

  const handleAddAlbums = () => {
    addAlbums(user);
  };

  let content;
  if (isFetching) {
    content = <p>is Loading</p>;
  } else if (error) {
    content = <p>{error}</p>;
  } else {
    content = data.map((album) => {
      return (
        <div key={album.id} className="border px-3 py-1 my-4">
          {album.title}
        </div>
      );
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums</h3>
        <Button onClick={handleAddAlbums}>+Add Album</Button>
      </div>
      <div>{content}</div>
    </div>
  );
}
