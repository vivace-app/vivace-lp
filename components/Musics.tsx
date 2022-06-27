import Artwork from './Artwork'

const Musics = () => {
  return (
    <>
      <div id="music" className="bg-base-200">
        <div className="max-w-md">
          <h2 className="ml-10 text-xl sm:ml-20 sm:text-2xl">収録楽曲</h2>
        </div>
        <div className="mt-10 grid w-auto grid-cols-2 justify-items-center gap-3 sm:grid-cols-3 md:gap-20">
          <Artwork
            src={'https://api.lorem.space/image/shoes?w=160&h=160'}
            alt={'image'}
            title={'title0'}
            name={'name'}
            comment={'comments'}
          />
          <Artwork
            src={'https://api.lorem.space/image/shoes?w=160&h=160'}
            alt={'image'}
            title={'title1'}
            name={'name'}
            comment={'comments'}
          />
          <Artwork
            src={'https://api.lorem.space/image/shoes?w=160&h=160'}
            alt={'image'}
            title={'title2'}
            name={'name'}
            comment={'comments'}
          />
          <Artwork
            src={'https://api.lorem.space/image/shoes?w=160&h=160'}
            alt={'image'}
            title={'title3'}
            name={'name'}
            comment={'comments'}
          />
          <Artwork
            src={'https://api.lorem.space/image/shoes?w=160&h=160'}
            alt={'image'}
            title={'title4'}
            name={'name'}
            comment={'comments'}
          />
          <Artwork
            src={'https://api.lorem.space/image/shoes?w=160&h=160'}
            alt={'image'}
            title={'title5'}
            name={'name'}
            comment={'comments'}
          />
        </div>
        <div className="mt-5 flex justify-center md:mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M24 30.75 12 18.75 14.15 16.6 24 26.5 33.85 16.65 36 18.8Z" />
          </svg>
          <p className="mt-2 mb-20 sm:mb-40">もっと見る</p>
        </div>
      </div>
    </>
  )
}

export default Musics
