import ProjectContent from "../../components/ProjectContent";
import { performRequest } from "../../../../../lib/datocms";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const PAGE_CONTENT_QUERY = `
query Materials($projectid: String){
    allMaterials(orderBy: materiKe_ASC, filter: {projectid: {eq: $projectid}}) {
      _firstPublishedAt
      id
      _status
      content {
        value
        blocks
      }
      content1 {
        value
        blocks
      }
      file {
        responsiveImage {
          alt
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          title
          srcSet
          width
          webpSrcSet
        }
        video {
          muxPlaybackId
          title
          width
          height
          blurUpThumb
        }
      }
      materiKe
      title
      image {
        responsiveImage {
          alt
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          title
          webpSrcSet
          width
        }
      }
      video {
        height
        url
        provider
        providerUid
        thumbnailUrl
        title
        width
      }
      projectid
    }
    _allMaterialsMeta {
      count
    }
}
`;

// get project id from url
export default async function Page({ params }: { params: { id: string } }) {
  const cookie = cookies();
  const token = cookie.get("token");

  if (!token) {
    redirect("/login");
  }

  const data = await performRequest({
    query: PAGE_CONTENT_QUERY,
    variables: { projectid: params.id },
  });

  const { allMaterials } = data.data;

  const res1 = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + `/api/v1/projects/${params.id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }
  );

  const res2 = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + `/api/v1/project-apply/${params.id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }
  );

  const { name, partner_name } = await res1.json();
  const { progress } = await res2.json();

  return (
    <>
      <ProjectContent
        allMaterials={allMaterials}
        projectName={name}
        partnerName={partner_name}
        progress={progress}
      />
    </>
  );
}
