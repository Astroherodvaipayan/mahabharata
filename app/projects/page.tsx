import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block p-4 border rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-gray-600">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
