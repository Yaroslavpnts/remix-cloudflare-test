import { type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { createApi } from "~/api";
import { type Author } from "~/types";
import TeamMember from "./TeamMember";

export const loader = async ({ context, request }: LoaderFunctionArgs) => {
  const api = createApi(context, request);

  const team = await api.get("/members", {
    params: {
      filters: {
        show_on_team_page: true,
      },
      sort: {
        join_date: "desc",
      },
      populate: "image",
      pagination: {
        pageSize: 100,
      },
    },
  });

  return {
    team: team.data,
  };
};

const OurTeam = ({
  team,
  title,
  subtitle,
}: {
  team: Author[];
  title: string;
  subtitle: string;
}) => {
  return (
    <section className="bg-yw-gray-100">
      <div className="container py-[110px]">
        <div className="yw-h2 mb-2 mt-12">{title}</div>
        <div className="yw-t1 max-w-[700px]">{subtitle}</div>
        <div className="yw-h3 mt-8 mb-2">Leaders</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {(team || [])
            .filter((el) => el.attributes.department === "founders")
            .map((member) => {
              return (
                <TeamMember member={member} key={"founders_" + member.id} />
              );
            })}
        </div>

        <div className="yw-h3 mt-8 mb-2">Team</div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 mb-4">
          {(team || [])
            .filter((el) => el.attributes.department !== "founders")
            .map((member) => {
              return <TeamMember member={member} key={member.id} />;
            })}
        </div>
      </div>
    </section>
  );
};

OurTeam.loader = loader;

export default OurTeam;
