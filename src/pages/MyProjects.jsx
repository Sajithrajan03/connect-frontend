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
      <div className="text-4xl font-bold p-6">My Projects</div>
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
