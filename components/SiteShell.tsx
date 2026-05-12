"use client";
import { useState } from "react";
import { Nav } from "./Nav";
import { MobileMenu } from "./MobileMenu";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <Nav onOpenMenu={() => setMenu(true)} />
      <MobileMenu open={menu} onClose={() => setMenu(false)} />
      {children}
      <Footer />
    </>
  );
}
