import { getAllClicks, incrementClick, linkIds } from "@/lib/clicks";

// 모든 링크의 현재 클릭 수
export async function GET() {
  try {
    const counts = await getAllClicks();
    return Response.json({ counts });
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return Response.json({ error: "클릭 수를 가져오지 못했습니다." }, { status: 500 });
  }
}

// 특정 링크의 클릭 수를 1 증가 (body: { id })
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;

  if (typeof id !== "string" || !linkIds.includes(id)) {
    return Response.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  try {
    const count = await incrementClick(id);
    return Response.json({ id, count });
  } catch (error) {
    console.error("클릭 수 증가 실패:", error);
    return Response.json({ error: "클릭 수를 기록하지 못했습니다." }, { status: 500 });
  }
}
