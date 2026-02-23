import React from 'react'

type CardProps = {
  id?: number | string,
  name?: string,
  sprites?: (string | undefined)[]
}

export const Card: React.FC<CardProps> = ({id, name, sprites = []}) => {
  const validSprites = sprites.filter(Boolean) as string[];

  return (
    <article className="card-component">
      <header className="card-header">
        <h2 className="card-title">#{id} - {name || 'Unknown'}</h2>
      </header>

      <div className="card-body">
        {validSprites.length > 0 ? (
          <div className="card-images">
            {validSprites.map((sprite) => (
              <img src={sprite} key={sprite} className="card-image" alt={name} />
            ))}
          </div>
        ) : (
          <div className="card-placeholder">No image available</div>
        )}
      </div>
    </article>
  )
}
