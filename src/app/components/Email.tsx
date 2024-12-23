import { Html } from "@react-email/components";
import React from "react";

type Props = {
  username: string;
  email: string;
  handle: string;
  message: string;
};

export default function Email({ username, email, handle, message }: Props) {
  return (
    <Html lang="en">
      <h1>{username} Submitted a message through the contact form.</h1>

      <h2>EMAIL:</h2>
      <p>{email}</p>
      <br />
      <h2>DISCORD OR TWITTER:</h2>
      <p>{handle}</p>
      <br />
      <h2>MESSAGE:</h2>
      <p>{message}</p>
    </Html>
  );
}
