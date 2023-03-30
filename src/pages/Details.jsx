import React from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const params = useParams();

  return <div>Details {params.name}</div>;
}
