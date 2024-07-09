import React from "react";
import { Link } from "wouter";
import { Routes } from "../../router/routes";
import { Button } from "@nextui-org/react";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/K3b6TSbWo5K
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

const NotFound: React.FC = () => {
  return (
    <div className="dark flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-32 w-32 rounded-full bg-primary/10 p-6">
          <svg
            className="h-full w-full text-primary"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
            <line x1="9" x2="9.01" y1="9" y2="9" />
            <line x1="15" x2="15.01" y1="9" y2="9" />
          </svg>
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-sky-50 sm:text-4xl">
          Oops, page not found!
        </h1>
        <p className="mt-4 text-sky-100">
          The page you're looking for doesn't exist or has been moved. Don't
          worry, we're here to help you find what you need.
        </p>
        <div className="mt-6">
          <Link href={Routes.Home}>
            <Button color="primary">Go to Homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
