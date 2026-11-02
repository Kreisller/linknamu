import photo from "../../profile/함이어진산하/profile.jpg";
import data from "../../profile/함이어진산하/profile.json";

// 사용할 사용자 프로필 폴더. 프로필 정보는 모두 `profile/<사용자명>/` 안에만 둔다.
// 다른 사용자로 바꾸려면 위 두 import 경로만 교체한다.
export const profile = {
  photo,
  name: data.name,
  bio: data.bio,
  tags: data.tags,
  links: data.links,
};
