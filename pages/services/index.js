import Head from "next/head";
import { createClient } from "contentful";

import DetailedServiceCard from "../../components/ui/DetailedServiceCard";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ServicesPage({ services }) {
  return (
    <div className="px-6 lg:px-12 my-12 lg:mt-0">
      <Head>
        <title>Andreas Notokusumo - My Services</title>
        <meta name="description" content="Top-notch services offered by Andreas Notokusumo" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <div className="lg:mt-24 lg:mb-16">
        <h4 className="uppercase text-primary-black opacity-30 text-xs font-semibold">
          MY SERVICES
        </h4>
        <h2 className="text-[2.5rem] font-bold pt-2 leading-tight">
          What do I do?
        </h2>
      </div>
      <div className="mt-16 md:mb-16 flex flex-col md:grid md:grid-cols-2 md:space-y-0 gap-20">
        {services.map((service) => {
          const { title, description, techstacks } = service.fields;
          return (
            <DetailedServiceCard
              key={service.sys.id}
              title={title}
              description={documentToReactComponents(description)}
              techstack={techstacks}
            />
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const servicesRes = await client.getEntries({
    content_type: "services",
  });

  const socialLinkRes = await client.getEntries({
    content_type: "socialLink",
    'sys.id[ne]': '6l995xa4s7NkEjERM3J4dH'
  });

  const resumeLinkRes = await client.getEntry("6l995xa4s7NkEjERM3J4dH");

  return {
    props: {
      services: servicesRes.items,
      socialLink: socialLinkRes.items,
      resumeLink: resumeLinkRes
    },
    revalidate: 60 * 5,
  };
}
