// src/pages/Projects.jsx
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const categories = [
  "All",
  "UI/UX",
  "E-commerce",
  "Mobile App",
  "Full Stack",
  "Wix",
  "Shopify",
  "Squarespace",
  "WordPress",
  "Framer",
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("id", { ascending: false });
    if (!error) setProjects(data || []);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      className="relative py-20 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/portfolio.jpg')" }} // Your image in /public
    >
      {/* 🔹 Slight black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border transition ${
                selectedCategory === cat
                  ? "bg-blue-600 border-blue-600"
                  : "border-white hover:bg-white hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid - Scrollable on Mobile */}
        <div className="overflow-x-auto">
          <div className="flex md:grid md:grid-cols-3 gap-6 min-w-max md:min-w-0">
            {filteredProjects.length === 0 ? (
              <p>No projects found.</p>
            ) : (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white bg-opacity-90 backdrop-blur-md text-gray-900 rounded-xl shadow hover:shadow-lg transition overflow-hidden min-w-[250px]"
                >
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.category}</p>
                    {project.project_url && (
                      <a
                        href={project.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
