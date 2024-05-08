import ProjectContent from "../../components/ProjectContent";
import { performRequest } from "../../../../../lib/datocms";

const PAGE_CONTENT_QUERY = `
query Materials($projectid: String){
    allMaterials(orderBy: materiKe_ASC, filter: {projectid: {eq: $projectid}}) {
      id
      _status
      _firstPublishedAt
      content {
        value
        blocks
      }
      content1 {
        blocks
        value
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
          srcSet
          title
          webpSrcSet
          width
        }
        video {
          title
          muxPlaybackId
          width
          height
          blurUpThumb
        }
      }
      title
      materiKe
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
        provider
        providerUid
        thumbnailUrl
        title
        url
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
  const data = await performRequest({
    query: PAGE_CONTENT_QUERY,
    variables: { projectid: params.id },
  });

  const { allMaterials } = data.data;

  const token = {
    value:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFrdWNsYXJpc3NhYWt1YWRhbGFodGFsZW50QGdtYWlsLmNvbSIsImV4cCI6MTcxNTM5NTM4M30.YBvhBTUiRHN9urDEjzpjQUcJPxBSAcBzsZhH__q5NJE",
  };

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
