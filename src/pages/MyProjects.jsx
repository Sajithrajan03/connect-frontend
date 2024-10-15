import PersonalProjectTile from "../components/PersonalProjectTile";

export default function MyProjects() {
  const projects = [
    { title: "AI Research", description: "Exploring AI in education." },
    { title: "Web Development", description: "Building a student platform." },
    { title: "Data Science", description: "Analyzing university data." },
    // Add more projects as needed
  ];
  return (
    <div>
      <div className="p-6 flex justify-between continer mx-auto">
        <div className="text-4xl font-bold">My Projects</div>
        <button className="mt-4 px-4 py-2 bg-accentBlue text-white rounded-md hover:bg-blue-500 transition-all duration-300">
          Add Project +
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-6">
        {projects.map((project, index) => (
          <PersonalProjectTile
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
