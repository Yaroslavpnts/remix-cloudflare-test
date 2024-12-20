import { FC } from "react";
import TeamMember from "./TeamMember";
import { Author } from "~/types";

type TProjectTeamProps = {
  title: string;
  description: string;
  members: { data: Author[] };
};

const ProjectTeam: FC<TProjectTeamProps> = ({
  title,
  description,
  members,
}) => {
  return (
    <section className="py-[72px] sm:py-28 bg-yw-gray-100">
      <div className="container">
        <h2 className="yw-h2 text-yw-primary-default mb-8">{title}</h2>
        <p className="yw-t1 font-medium text-yw-gray-500 w-full lg:max-w-[calc(50%-20px)] mb-10">
          {description}
        </p>
        <div className="flex overflow-x-auto mobile-slider sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-10 mb-4">
          {(members.data || []).map((member) => (
            <TeamMember member={member} key={member.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTeam;
