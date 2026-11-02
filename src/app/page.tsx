import Image from "next/image";
import InterestTag from "@/components/InterestTag";
import LinkCard from "@/components/LinkCard";
import { profile } from "@/lib/profile";

export default function Home() {
  return (
    <main className="flex min-h-dvh w-full justify-center font-sans">
      <div className="flex w-full max-w-md flex-col items-center px-6 py-16 sm:py-20">
        {/* 원형 프로필 사진 */}
        <Image
          src={profile.photo}
          alt={`${profile.name} 프로필 사진`}
          priority
          className="h-28 w-28 rounded-full object-cover ring-4 ring-white/80 shadow-avatar sm:h-32 sm:w-32"
        />

        {/* 이름 & 한줄 소개 */}
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-ink">
          {profile.name}
        </h1>
        <p className="mt-2 text-center text-base text-ink/65">{profile.bio}</p>

        {/* 관심 태그 */}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {profile.tags.map((tag) => (
            <InterestTag key={tag} label={tag} />
          ))}
        </div>

        {/* 링크 카드 목록 (세로 배치) */}
        <div className="mt-12 flex w-full flex-col gap-3.5">
          {profile.links.map((link) => (
            <LinkCard key={link.title} title={link.title} url={link.url} />
          ))}
        </div>
      </div>
    </main>
  );
}
