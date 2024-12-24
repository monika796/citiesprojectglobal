"use client";
import Image from "next/image";
import { useState } from "react";

import { useSearchParams } from "next/navigation";

export const getId  = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
 
 
  return id;

};