"use client";

import { Spinner } from "flowbite-react";
import "./Spinner.css";

export function Loading() {
  return (
    <div className="flex flex-wrap gap-2">
      <Spinner color="pink" aria-label="Pink spinner example" />
    </div>
  );
}
