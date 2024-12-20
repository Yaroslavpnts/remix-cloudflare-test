import { type FC } from "react";

type TTeam_members = {
  team_member: string;
};

type TTech_stack_proj_card = {
  group: string;
  technologies: string;
};

type TProps = {
  team_members: TTeam_members[];
  tech_stack_proj_card: TTech_stack_proj_card[];
};

const TechStackDevsTeam: FC<TProps> = ({
  team_members,
  tech_stack_proj_card,
}) => {
  return (
    <>
      <section className="py-8 md:py-20">
        <div className="container grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-4 mb-4">
            <div className="yw-h2">The team</div>
          </div>

          <div className="col-span-12 md:col-span-8 ">
            {team_members.map((item, idx) => (
              <div key={idx}>
                <div className="yw-t1 font-bold mb-2">{item.team_member}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-20 bg-yw-gray-900 text-white">
        <div className="container grid grid-cols-12 gap-2">
          <div className="col-span-12 lg:col-span-4 mb-6">
            <div className="yw-h2 leading-none">Technologies</div>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-10">
              {tech_stack_proj_card.map((item, idx) => (
                <div key={idx} className="">
                  <div className="yw-h3 mb-2">{item.group}</div>
                  <ul className="list-disc">
                    {item.technologies
                      .split(",")
                      .map((technology: string, idx) => (
                        <li key={idx} className="yw-t1 font-bold mb-1 ml-4">
                          {technology}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStackDevsTeam;
