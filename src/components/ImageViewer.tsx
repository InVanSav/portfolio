import { useEffect } from "react"
import "./ImageViewer.css"

interface Props {
  images: string[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function ImageViewer({
  images,
  index,
  onClose,
  onPrev,
  onNext
}: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
    }

    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose, onPrev, onNext])

  return (
    <div className="viewer" onClick={onClose}>
      <img
        src={images[index]}
        className="viewer__img"
        onClick={e => e.stopPropagation()}
      />

      <div className="viewer__close">✕</div>

      {images.length > 1 && (
        <>
          <div
            className="viewer__arrow left"
            onClick={e => {
              e.stopPropagation()
              onPrev()
            }}
          >
            ‹
          </div>

          <div
            className="viewer__arrow right"
            onClick={e => {
              e.stopPropagation()
              onNext()
            }}
          >
            ›
          </div>
        </>
      )}
    </div>
  )
}
