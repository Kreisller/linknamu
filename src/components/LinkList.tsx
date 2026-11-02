"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";

type Link = { id: string; title: string; url: string };

type Counts = Record<string, number>;

export default function LinkList({ links }: { links: Link[] }) {
  // null: 아직 집계 중
  const [counts, setCounts] = useState<Counts | null>(null);
  const [failed, setFailed] = useState(false);

  // 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 가져온다.
  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/clicks", { cache: "no-store", signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<{ counts: Counts }>;
      })
      .then((data) => setCounts(data.counts))
      .catch(() => {
        if (!controller.signal.aborted) setFailed(true);
      });

    return () => controller.abort();
  }, []);

  // 카드를 누르면 해당 링크의 클릭 수를 1 올린다.
  function handleClick(id: string) {
    // 화면에는 즉시 +1 반영 (집계가 끝난 뒤에만)
    setCounts((prev) => (prev ? { ...prev, [id]: (prev[id] ?? 0) + 1 } : prev));

    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true, // 새 탭으로 열린 뒤에도 요청이 끝까지 전송되도록
    })
      .then((res) => (res.ok ? (res.json() as Promise<{ id: string; count: number }>) : null))
      .then((data) => {
        if (data) {
          setCounts((prev) => (prev ? { ...prev, [data.id]: data.count } : prev));
        }
      })
      .catch(() => {
        // 기록 실패 시 서버 값과 다시 맞추기 위해 조용히 무시
      });
  }

  function countLabel(id: string): string {
    if (failed) return "집계 실패";
    if (counts === null) return "집계중..";
    return `${(counts[id] ?? 0).toLocaleString("ko-KR")}회`;
  }

  return (
    <>
      {links.map((link) => (
        <LinkCard
          key={link.id}
          title={link.title}
          url={link.url}
          count={countLabel(link.id)}
          onClick={() => handleClick(link.id)}
        />
      ))}
    </>
  );
}
