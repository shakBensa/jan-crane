"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type Props = { id: string };

export default function GAAnalytics({ id }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Build a stable string for dependencies
  const search = useMemo(() => searchParams?.toString() ?? "", [searchParams]);
  const lastUrlRef = useRef<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const url = pathname + (search ? `?${search}` : "");
    // Only send when the URL actually changes. Avoid duplicating initial pageview
    // which is already sent by the gtag init script in the layout.
    if (lastUrlRef.current === null) {
      lastUrlRef.current = url;
      return;
    }
    if (lastUrlRef.current !== url) {
      lastUrlRef.current = url;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag?.("config", id, { page_path: url });
    }
  }, [id, pathname, search]);

  return null;
}
