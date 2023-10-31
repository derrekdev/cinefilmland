"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Initiate({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  queryClient.removeQueries({ queryKey: "searchMovie" });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
