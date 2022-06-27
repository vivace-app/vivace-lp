interface ArtWorkProps {
  src: string
  alt: string
  title: string
  name: string
  comment: string
}

const Artwork = (props: ArtWorkProps) => {
  return (
    <>
      <label htmlFor={'my-modal-' + props.title}>
        <img
          className="mask mask-squircle"
          src="https://api.lorem.space/image/shoes?w=160&h=160"
          alt="image"
        />
      </label>
      <input
        type="checkbox"
        id={'my-modal-' + props.title}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={'my-modal-' + props.title}
            className="btn btn-ghost btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2">
            <img
              className="mask mask-squircle"
              src={props.src}
              alt={props.alt}
            />
            <div>
              <h3 className="mt-5 text-lg font-bold">{props.title}</h3>
              <h4 className="text-md">{props.name}</h4>
              <p className="py-4">{props.comment}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Artwork
