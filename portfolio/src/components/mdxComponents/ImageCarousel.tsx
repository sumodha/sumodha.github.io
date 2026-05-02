import { useState } from 'react'

interface CarouselProps {
  images: { src: string; alt?: string }[], 
  height?: number,
  width?: number
}

export function ImageCarousel({ images, height = 550, width = 400}: CarouselProps) {
  const [index, setIndex] = useState(0)

  if (!images || images.length === 0) return null

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ position: 'relative', width: width, height: height, overflow: 'hidden' }}>
        <img
          src={images[index].src}
          alt={images[index].alt ?? ''}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />

        <button onClick={prev} style={btnStyle('left')}>‹</button>
        <button onClick={next} style={btnStyle('right')}>›</button>

        <div
          style={{
            position: 'absolute',
            bottom: 12,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            background: 'rgba(0,0,0,0.35)',
            borderRadius: 20,
            padding: '5px 10px',
            zIndex: 2,
          }}
        >
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              style={{
                width: 6,
                height: 6,
                minWidth: 6,
                minHeight: 6,
                borderRadius: '50%',
                cursor: 'pointer',
                background: i === index ? '#fff' : 'rgba(255,255,255,0.4)',
                transition: 'background 0.2s',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function btnStyle(side: 'left' | 'right'): React.CSSProperties {
  return {
    position: 'absolute',
    top: '50%',
    [side]: 8,
    transform: 'translateY(-50%)',
    zIndex: 2,
    background: 'rgba(0,0,0,0.4)',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: 32,
    height: 32,
    fontSize: 18,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
  }
}