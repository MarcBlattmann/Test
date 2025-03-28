import ClubHeader from "@/components/ClubHeader/component";
import LikeCounter from "@/components/LikeCounter/component";
import OurMembers from "@/components/OurMembers/component";

export default function Home() {
  return (
    <div>
      <ClubHeader/>
      <OurMembers/>
      <LikeCounter/>
    </div>
  );
}
