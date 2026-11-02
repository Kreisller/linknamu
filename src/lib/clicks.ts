import { getDb } from "@/lib/mongodb";
import { profile } from "@/lib/profile";

// 링크별 클릭 수 문서: { _id: 링크 id, count: 숫자 }
const COLLECTION = "link_clicks";

type ClickDoc = { _id: string; count: number };

export const linkIds: string[] = profile.links.map((link) => link.id);

// 모든 링크의 클릭 수를 한 번의 쿼리로 가져온다. 기록이 없는 링크는 0.
export async function getAllClicks(): Promise<Record<string, number>> {
  const db = await getDb();
  const docs = await db
    .collection<ClickDoc>(COLLECTION)
    .find({ _id: { $in: linkIds } })
    .toArray();

  const counts: Record<string, number> = Object.fromEntries(
    linkIds.map((id) => [id, 0]),
  );
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }
  return counts;
}

// 클릭 수를 1 증가시키고, 증가된 최신 값을 돌려준다.
export async function incrementClick(id: string): Promise<number> {
  const db = await getDb();
  const doc = await db
    .collection<ClickDoc>(COLLECTION)
    .findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
  return doc?.count ?? 1;
}
