import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = allProjects.find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <div className="mt-4 text-zinc-600">{project.description}</div>
      </div>
    </div>
  );
}
