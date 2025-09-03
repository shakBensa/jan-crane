"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type Props = { id: string };

export default function GAAnalytics({ id }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.size ? `?${searchParams.toString()}` : "");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag?.("config", id, { page_path: url });
  }, [id, pathname, searchParams]);

  return null;
}

