import { GetServerSidePropsContext } from "next";

//catches paths and redirects to the home page with appropriate query
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const path = context.params?.path;

  return {
    redirect: {
      destination: `/?${path}`,
      permanent: false,
    },
  };
}

export default function Path() {
  return <></>;
}
