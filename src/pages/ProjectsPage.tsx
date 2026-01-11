import projectsData from "../assets/projects.json"
import { ProjectCard } from "../components/ProjectCard"
import type { Project } from "../types/Project"
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa"
import "./ProjectsPage.css"

export function ProjectsPage() {
  const projects = projectsData as Project[]

  return (
    <div className="projects-page">
      <div className="contacts-block">
        <ul className="contacts-list">
          <li className="contact-item">
            <a 
              href="https://t.me/Ivan_Savickij" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaTelegramPlane color="#0088cc" />
              <span>Telegram личный</span>
            </a>
          </li>
        
          <li className="contact-item">
            <a 
              href="https://wa.me/79958701830" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaWhatsapp color="#25D366" />
              <span>WhatsApp</span>
            </a>
          </li>

          <li className="contact-item">
            <a 
              href="https://t.me/twenty_four_frames" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaTelegramPlane color="#0088cc" />
              <span>Telegram канал</span>
            </a>
          </li>
        </ul>
      </div>

      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}