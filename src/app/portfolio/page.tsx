"use client";

import React, { useEffect, useState } from "react";

interface Project {
  _id: string;
  title: string;
  description: string;
  techStack: string[];
  liveDemo?: string;
  github?: string;
}

const PortfolioPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();

        if (response.ok) {
          setProjects(data.data);
        } else {
          setError(data.message || "Failed to fetch projects.");
        }
      } catch (err) {
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading projects...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="portfolio-page">
    <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
        <div
            key={project._id}
            className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            
            {/* Updated section for description */}
            <pre className="text-gray-600 whitespace-pre-wrap mb-4">{project.description}</pre>
            
            <h3 className="font-medium text-gray-700 mb-2">Tech Stack:</h3>
            <ul className="list-disc list-inside mb-4">
            {project.techStack.map((tech, index) => (
                <li key={index} className="text-gray-500">
                {tech}
                </li>
            ))}
            </ul>
            <div className="flex gap-4">
            {project.liveDemo && (
                <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                Live Demo
                </a>
            )}
            {project.github && (
                <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                >
                GitHub
                </a>
            )}
            </div>
        </div>
        ))}
    </div>
    </div>
  );
};

export default PortfolioPage;
