import projectsData from "../assets/projects.json"
import { ProjectCard } from "../components/ProjectCard"
import type { Project } from "../types/Project"

export function ProjectsPage() {
  const projects = projectsData as Project[]

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 24 }}>
      <h1>Мои проекты</h1>

      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
