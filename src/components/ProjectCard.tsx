import { useState } from "react"
import type { Project } from "../types/Project"
import { ImageViewer } from "./ImageViewer"
import "./ProjectCard.css"

interface Props {
  project: Project
}

export function ProjectCard({ project }: Props) {
  const [current, setCurrent] = useState<number | null>(null)

  return (
    <div className="project">
      <h2 className="project__title">{project.title}</h2>
      <p className="project__description">{project.description}</p>

      <div className="project__images">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="project__image"
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {current !== null && (
        <ImageViewer
          images={project.images}
          index={current}
          onClose={() => setCurrent(null)}
          onPrev={() =>
            setCurrent(
              (current - 1 + project.images.length) %
                project.images.length
            )
          }
          onNext={() =>
            setCurrent((current + 1) % project.images.length)
          }
        />
      )}
    </div>
  )
}
