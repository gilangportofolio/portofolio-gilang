function ProjectButton({ onClick, type, href, children }) {
  if (type === 'website' && href) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="project-button website-button"
        onClick={(e) => {
          e.stopPropagation()
          console.log('Website button clicked')
          if (onClick) onClick(e)
        }}
      >
        {children}
      </a>
    )
  }

  return (
    <button 
      className="project-button detail-button"
      onClick={(e) => {
        e.stopPropagation()
        console.log('Detail button clicked')
        if (onClick) onClick(e)
      }}
    >
      {children}
    </button>
  )
}

export default ProjectButton 