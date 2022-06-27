import Person from './Person'

const SpecialThanks = () => {
  return (
    <>
      <div id="thanks" className="bg-base-200">
        <div className="max-w-md">
          <h2 className="ml-10 text-xl sm:ml-20 sm:text-2xl">Special Thanks</h2>
        </div>
        <div className="row-gap-8 sm:row-gap-10 mx-10 mt-10 grid w-auto justify-items-center gap-10 pb-20 sm:grid-cols-2 sm:pb-40 lg:grid-cols-3">
          <Person
            twitter={'https://twitter.com/oucrc'}
            src={'https://api.lorem.space/image/shoes?w=160&h=160'}
            alt={'img'}
            name={'taro'}
            role={'譜面制作'}
          />
          <Person
            twitter={'https://twitter.com/oucrc'}
            src={'https://api.lorem.space/image/shoes?w=160&h=160'}
            alt={'img'}
            name={'taro'}
            role={'譜面制作'}
          />
          <Person
            twitter={'https://twitter.com/oucrc'}
            src={'https://api.lorem.space/image/shoes?w=160&h=160'}
            alt={'img'}
            name={'taro'}
            role={'譜面制作'}
          />
          <Person
            twitter={'https://twitter.com/oucrc'}
            src={'https://api.lorem.space/image/shoes?w=160&h=160'}
            alt={'img'}
            name={'taro'}
            role={'譜面制作'}
          />
          <Person
            twitter={'https://twitter.com/oucrc'}
            src={'https://api.lorem.space/image/shoes?w=160&h=160'}
            alt={'img'}
            name={'taro'}
            role={'譜面制作'}
          />
          <Person
            twitter={'https://twitter.com/oucrc'}
            src={'https://api.lorem.space/image/shoes?w=160&h=160'}
            alt={'img'}
            name={'taro'}
            role={'譜面制作'}
          />
        </div>
      </div>
    </>
  )
}

export default SpecialThanks
