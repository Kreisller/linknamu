import InterestTag from "@/components/InterestTag";
import LinkCard from "@/components/LinkCard";

// 더미 데이터: 실제 내용은 추후 교체
const profile = {
  name: "함이어진산하",
  bio: "사업가를 꿈꾸는 청년",
  tags: ["창업", "스타트업", "마케팅", "독서"],
};

const links = [
  { title: "GitHub", url: "https://github.com" },
  { title: "LinkedIn", url: "https://www.linkedin.com" },
  { title: "Blog", url: "https://velog.io" },
];

export default function Home() {
  return (
    <main className="flex min-h-dvh w-full justify-center font-sans">
      <div className="flex w-full max-w-md flex-col items-center px-4 py-12 sm:py-16">
        {/* 원형 프로필 사진 (더미: 회색 원) */}
        <div
          aria-label="프로필 사진"
          className="h-32 w-32 rounded-full border-4 border-white bg-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.1)] sm:h-36 sm:w-36"
        />

        {/* 이름 & 한줄 소개 */}
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-ink">
          {profile.name}
        </h1>
        <p className="mt-2 text-center text-base text-slate-600">{profile.bio}</p>

        {/* 관심 태그 */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {profile.tags.map((tag) => (
            <InterestTag key={tag} label={tag} />
          ))}
        </div>

        {/* 링크 카드 목록 (세로 배치) */}
        <div className="mt-10 flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.title} title={link.title} url={link.url} />
          ))}
        </div>
      </div>
    </main>
  );
}
