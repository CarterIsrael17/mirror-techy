// src/pages/AdminUpload.jsx
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const categories = [
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

const AdminUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("UI/UX");
  const [projectUrl, setProjectUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  // Fetch existing projects
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

  const handleUpload = async () => {
    if (!title || !description || !image) {
      alert("Please fill all fields and select an image.");
      return;
    }

    setLoading(true);
    try {
      // Upload image to Supabase Storage
      const fileName = `${Date.now()}-${image.name}`;
      const { error: storageError } = await supabase.storage
        .from("projects")
        .upload(fileName, image);

      if (storageError) throw storageError;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("projects")
        .getPublicUrl(fileName);
      const publicUrl = urlData.publicUrl;

      // Insert into database
      const { error: dbError } = await supabase.from("projects").insert([
        {
          title,
          description,
          image_url: publicUrl,
          category,
          project_url: projectUrl,
        },
      ]);

      if (dbError) throw dbError;

      alert("Project uploaded successfully!");
      setTitle("");
      setDescription("");
      setImage(null);
      setProjectUrl("");
      setCategory("UI/UX");
      fetchProjects();
    } catch (err) {
      console.error(err);
      alert("Failed to save project!");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (project) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    try {
      const imagePath = project.image_url.split("/").pop();
      await supabase.storage.from("projects").remove([imagePath]);
      await supabase.from("projects").delete().eq("id", project.id);

      fetchProjects();
      alert("Project deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to delete project!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-10">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md mx-auto space-y-4">
        <h2 className="text-2xl font-bold text-center">Admin Project Upload</h2>

        <input
          type="text"
          placeholder="Project Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Project Description"
          className="w-full p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <input
          type="text"
          placeholder="Project Link (optional)"
          className="w-full p-2 border rounded"
          value={projectUrl}
          onChange={(e) => setProjectUrl(e.target.value)}
        />

        <select
          className="w-full p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="file"
          className="w-full p-2 border rounded"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload Project"}
        </button>
      </div>

      {/* Project List */}
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-xl font-bold">Uploaded Projects</h3>
        {projects.length === 0 ? (
          <p>No projects uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="border rounded-lg overflow-hidden shadow">
                <img src={project.image_url} alt={project.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold">{project.title}</h4>
                  <p className="text-sm text-gray-600">{project.category}</p>
                  <button
                    onClick={() => handleDelete(project)}
                    className="mt-2 w-full bg-red-500 text-white py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUpload;
