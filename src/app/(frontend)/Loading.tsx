import React from "react";
import { FaSpinner } from "react-icons/fa6";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div id="lscreen">
      <FaSpinner className="svg"></FaSpinner>
      <p>Please wait . . .</p>
    </div>
  );
}
