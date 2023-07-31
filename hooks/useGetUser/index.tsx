"use client";

import useSWR from "swr";
import getUser from "@/utils/requests";

export default function useGetUser() {
  const { data, isLoading } = useSWR("user", getUser, {
    revalidateOnFocus: false,
    revalidateOnMount: true,
    refreshInterval: 400000,
  });

  return {
    user: data,
    isLoading: isLoading,
  };
}

// Path: hooks\useGetUser\index.tsx
// Compare this snippet from utils\requests\index.tsx:
