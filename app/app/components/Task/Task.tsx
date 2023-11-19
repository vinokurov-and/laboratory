"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default function Task({ text, labLink }) {
  var taskLink = "/task/" + labLink;

  return <Link href={taskLink}>{text}</Link>;
}
