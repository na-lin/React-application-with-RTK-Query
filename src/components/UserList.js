import React from "react";
import UserItem from "./UserItem";
import { useFetchUsersQuery } from "../store";

export default function UserList() {
  const { data, error, isFetching } = useFetchUsersQuery();
  let content;
  if (isFetching) {
    content = <div>isLoading...</div>;
  } else if (error) {
    content = <div>{error}</div>;
  } else {
    content = data.map((user) => {
      return <UserItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <h1 className="m-2 text-xl">Users</h1>
      {content}
    </div>
  );
}
