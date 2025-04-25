"use client";

import { useAuthStore } from "@/stores/auth";
import { House } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Navbar = () => {
  const router = useRouter();
  const { user, clearAuth } = useAuthStore();
  const logout = () => {
    clearAuth();
    router.push("/login");
  };
  return (
    <nav className="border-b">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4 py-2">
          <Link href="/">
            {" "}
            <House stroke="#100" size={32} />
          </Link>
          <div className="flex cursor-pointer items-center gap-4">
            <Link href="/">Home</Link>
            {!!user && <Link href="/write">Write</Link>}
            {!user && (
              <Link href="/login">
                <Button>Sign In</Button>
              </Link>
            )}
            {!!user && <p onClick={logout}>Log Out</p>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
