import React from "react";
import AlbumsList from "./AlbumsList";

export default function UserItem({ user }) {
  return (
    <div className="mb-10 border px-4 pt-2">
      <p>Username: {user.name}</p>
      <AlbumsList user={user} />
    </div>
  );
}
