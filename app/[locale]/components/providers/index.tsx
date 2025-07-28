// In /app/providers.tsx
"use client";

import { ProgressProvider } from "@bprogress/next/app";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/shadcnui/ui/sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <ProgressProvider
        height="2px"
        color="#009966"
        options={{ showSpinner: false }}
        shallowRouting
      >
        {children}
        <Toaster />
      </ProgressProvider>
    </ThemeProvider>
  );
};

export default Providers;
