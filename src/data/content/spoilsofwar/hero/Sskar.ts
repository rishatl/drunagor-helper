import AvatarImageUrl from "@/assets/hero/avatar/SskarAvatar.webp";
import type { HeroData } from "@/data/repository/HeroData";
import type { ArmorType } from "@/data/type/ArmorType";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";
import type { OffHandType } from "@/data/type/OffHandType";
import type { WeaponType } from "@/data/type/WeaponType";

export class Sskar implements HeroData {
  id = "sskar";
  name = "Sskar";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Sorcerer";
  path: HeroPath = "Mystics";
  race: HeroRace = "Draconian";
  proficiencies = {
    weapon: ["Implement"] as WeaponType[],
    offHand: ["Off Hand Weapon"] as OffHandType[],
    armor: ["Cloth"] as ArmorType[],
  };
  images = {
    avatar: AvatarImageUrl,
  };
}
