import React from "react";

export default function UserItem({ user }) {
  return <div className="mb-10 border px-4 pt-2">{user.name}</div>;
}
