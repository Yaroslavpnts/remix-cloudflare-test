import { type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { createApi } from "~/api";
import StrapiImage from "../../StrapiImage";
import { type Author } from "~/types";

export const loader = async ({ context, request }: LoaderFunctionArgs) => {
  const api = createApi(context, request);

  const team = await api.get("/members", {
    params: {
      filters: {
        is_author: true,
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
    team: team?.data,
  };
};

const OurAuthors = ({
  team,
  title,
  sub_title,
  dataSectionName,
}: {
  team: Author[];
  title: string;
  sub_title: string;
  dataSectionName: string;
}) => {
  return (
    <section className="bg-yw-gray-100" data-section-name={dataSectionName}>
      <div className="container py-[110px]">
        <div className="yw-h2 mb-2 mt-12">{title}</div>
        <div className="yw-t1">{sub_title}</div>
        <div className="yw-h3 mt-8 mb-2">Our Authors</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {(team || []).map((member) => {
            return (
              <a href={`/authors/${member.attributes.slug}`} className="" key={"is_author" + member?.id}>
                {member?.attributes?.image && (
                  <StrapiImage
                    alt={`${member?.attributes?.first_name} ${member?.attributes?.last_name}`}
                    image={member?.attributes?.image?.data}
                    className="md:h-[420px] w-full object-cover"
                    width="248px"
                    height="420px"
                  />
                )}
                <div className="yw-t1 mt-2">
                  {`${member?.attributes?.first_name} ${member?.attributes?.last_name}`}
                </div>
                <div className="yw-t1-bold">{member?.attributes?.position}</div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

OurAuthors.loader = loader;

export default OurAuthors;
