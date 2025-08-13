import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from("projects").select("*");
      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (project) => project.category.toLowerCase() === filter
        );

  return (
    <section className="py-12 px-4 md:px-16 bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        My Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-8 gap-3 flex-wrap">
        {["all", "web", "mobile", "design"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 rounded-full text-sm md:text-base ${
              filter === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.length === 0 ? (
          <p className="col-span-full text-center">No projects found.</p>
        ) : (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-full max-w-xs sm:max-w-sm md:max-w-none mx-auto bg-white bg-opacity-90 backdrop-blur-md text-gray-900 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={project.image_url}
                alt={project.title}
                className="w-full h-32 sm:h-40 object-cover"
              />
              <div className="p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-bold">{project.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{project.category}</p>
                {project.project_url && (
                  <a
                    href={project.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm transition"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
