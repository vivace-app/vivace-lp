const Demo = () => {
  return (
    <>
      <div id="demo" className="flex justify-center bg-base-100 pt-40">
        <div className="max-w-md">
          <iframe
            className="mb-20 h-fit w-fit sm:mb-40 sm:h-[270px] sm:w-[480px] md:h-[315px] md:w-[560px]"
            src="https://www.youtube.com/embed/wwzEH9N9eUk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </>
  )
}

export default Demo
