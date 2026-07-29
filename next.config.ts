import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hides the Next.js badge that sits in the bottom-left corner during development.
  // It only ever appeared in dev — production builds never rendered it — but it
  // overlapped the layout while checking mobile widths.
  devIndicators: false,
};

export default nextConfig;
