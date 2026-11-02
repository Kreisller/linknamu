import Image from "next/image";
import InterestTag from "@/components/InterestTag";
import LinkCard from "@/components/LinkCard";
import { profile } from "@/lib/profile";

export default function Home() {
  return (
    <main className="flex min-h-dvh w-full justify-center font-sans">
      <div className="flex w-full max-w-md flex-col items-center px-4 py-12 sm:py-16">
        {/* 원형 프로필 사진 */}
        <Image
          src={profile.photo}
          alt={`${profile.name} 프로필 사진`}
          priority
          className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-[0_8px_30px_rgba(15,23,42,0.1)] sm:h-36 sm:w-36"
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
          {profile.links.map((link) => (
            <LinkCard key={link.title} title={link.title} url={link.url} />
          ))}
        </div>
      </div>
    </main>
  );
}
