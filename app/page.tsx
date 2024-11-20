import Link from "next/link";
import TableData from "@/components/tabeldata"
import { Suspense } from "react";
import { Spinner } from "@/components/spinner";

export default function Home() {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-center gap-1 mb-5">
        <h1 className="text-4xl font-bold">Next.js 14 + larave 11 + TailwindCSS DaisyUI CRUD System</h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href="/user/create" className="btn btn-accent">
            Create
          </Link>
        </div>
        <Suspense fallback={<Spinner />}>
          <TableData />
        </Suspense>
      </div>
    </div>
  );
}
