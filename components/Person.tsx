interface PersonProps {
  twitter: string
  src: string
  alt: string
  name: string
  role: string
}

const Person = (props: PersonProps) => {
  return (
    <>
      <div className="flex">
        <a href={props.twitter} target="_blank" rel="noopener noreferrer">
          <img
            className="mr-4 h-20 w-20 rounded-full object-cover shadow"
            src={props.src}
            alt={props.alt}
          />
        </a>
        <div className="flex flex-col justify-center">
          <p className="text-lg font-bold">{props.name}</p>
          <p className="text-sm text-gray-800">{props.role}</p>
        </div>
      </div>
    </>
  )
}

export default Person
