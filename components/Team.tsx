interface TeamProps {
  src: string
  alt: string
  name: string
  role: string
  comment: string
  twitter: string
  github: string
}

const Team = (props: TeamProps) => {
  return (
    <>
      <div>
        <div className="relative transform overflow-hidden rounded shadow-lg transition duration-300 hover:shadow-2xl lg:hover:-translate-y-2">
          <img
            className="h-56 w-56 object-cover md:h-64 md:w-64 xl:h-80 xl:w-80"
            src={props.src}
            alt={props.alt}
          />
          <div className="absolute inset-0 flex flex-col justify-center bg-black bg-opacity-75 px-5 py-4 text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <p className="mb-1 text-lg font-bold text-gray-100">{props.name}</p>
            <p className="mb-4 text-xs text-gray-100">{props.role}</p>
            <p className="mb-4 text-xs tracking-wide text-gray-400">
              {props.comment}
            </p>
            <div className="flex items-center justify-center space-x-3">
              <a
                href={props.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-accent-400 text-white transition-colors duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href={props.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-accent-400 text-white transition-colors duration-300"
              >
                <img className="h-5 w-5" src="/img/GitHub.png" alt="github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team
