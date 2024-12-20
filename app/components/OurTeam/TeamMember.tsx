import { FC } from "react";
import StrapiImage from "../StrapiImage";
import { Author } from "~/types";

type TTeamMemberProps = {
  member: Author;
};

const TeamMember: FC<TTeamMemberProps> = ({ member }) => {
  return (
    <div className="flex flex-col items-start flex-shrink-0 h-full">
      {member.attributes.image && (
        <StrapiImage
          alt={
            member.attributes.first_name + " | " + member.attributes.position
          }
          image={member.attributes.image?.data}
          className="max-h-[292px] w-[195px] sm:max-h-none sm:h-inherit sm:w-full object-cover rounded-[20px]"
          width="248px"
          height="420px"
        />
      )}
      <div className="yw-h4 mt-3 sm:mt-6">{member.attributes.first_name}</div>
      <div className="yw-t1 text-yw-gray-500">{member.attributes.position}</div>
    </div>
  );
};

export default TeamMember;
