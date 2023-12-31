"use client";

import Link from "next/link"
import * as React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { useUser } from "@auth0/nextjs-auth0/client";

import Logo from "@/components/logo.svg";
import Image from "next/image";

export const Header: React.FC = () => {
  const user = useUser();

  return (
    <div>
      <div className="absolute top-2 left-2">
        <ModeToggle />
      </div>
      <header>
        <div className="flex items-center space-x-6 relative">
          <a href="/" className="flex items-center">
            <Image src={Logo} alt="Logo" className="w-8" />
            <h1 className="font-bold ml-4">
              W<span className="text-xs">ill</span>2C
              <span className="text-xs">ode</span>
            </h1>
          </a>
          <Link href="/about">About</Link>
          <div className="absolute right-0 space-x-2 flex items-center">
            {!user.user && (
              <a href="/api/auth/login">
                <button className="text-primary text-sm px-2 rounded-full bg-transparent border border-1 border-primary">
                  Sign in
                </button>
              </a>
            )}
            {user.user && (
              <div>
                user:
                <span className="font-bold m-2">
                  {user.user.given_name as string}
                </span>
                <a href="/api/auth/logout">
                  <button className="text-primary text-sm px-2 rounded-full bg-transparent">
                    Log out
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};
