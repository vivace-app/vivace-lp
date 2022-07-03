import Team from './Team'

const Teams = () => {
  return (
    <>
      <div id="team" className="bg-base-100">
        <div className="max-w-md">
          <h2 className="ml-10 text-xl sm:ml-20 sm:text-2xl">制作者</h2>
        </div>
        <div className="mx-10 mt-10 grid w-auto grid-cols-1 justify-items-center gap-10 pb-20 sm:grid-cols-3 sm:pb-40">
          <Team
            src={'https://api.lorem.space/image/shoes?w=160&h=160'}
            alt={'img'}
            name={'smpny7'}
            role={'担当箇所'}
            comment={
              'In charge of VIVACE coding and design. Usually working part-time as an engineer. My territory is web front and back-end, designing UI & UX, make Android apps with Kotlin.'
            }
            twitter={'https://twitter.com/smpny7'}
            github={'https://github.com/smpny7'}
          />
          <Team
            src={'https://api.lorem.space/image/shoes?w=160&h=160'}
            alt={'img'}
            name={'chishige1217200'}
            role={'担当箇所'}
            comment={
              'Thanks for your visiting. Because of some kind of connection, I am a member of this project. I am not good at coding, but I want to do my best. I am making some musics.'
            }
            twitter={'https://twitter.com/windows7_love'}
            github={'https://github.com/chishige1217200'}
          />
          <Team
            src={'https://api.lorem.space/image/shoes?w=160&h=160'}
            alt={'img'}
            name={'Natsu-dev'}
            role={'担当箇所'}
            comment={
              'Some parts of VIVACE; coding, producing some tracks and painting some pictures. Working as a song-writer and painter, as known as “pho”.'
            }
            twitter={'https://twitter.com/p_phoric'}
            github={'https://github.com/Natsu-dev'}
          />
        </div>
      </div>
    </>
  )
}

export default Teams
