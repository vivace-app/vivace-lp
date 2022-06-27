const Header = () => {
  return (
    <>
      <div className="navbar rounded-box w-auto bg-base-300">
        <div className="flex flex-1 justify-end px-2">
          <div className="flex items-stretch">
            <a
              href="#demo"
              className="text-align-center btn btn-ghost rounded-btn hidden lg:flex"
            >
              デモ
            </a>
            <a
              href="#news"
              className="text-align-center btn btn-ghost rounded-btn hidden lg:flex"
            >
              お知らせ・更新情報
            </a>
            <a
              href="#music"
              className="text-align-center btn btn-ghost rounded-btn hidden lg:flex"
            >
              収録楽曲
            </a>
            <a
              href="#team"
              className="text-align-center btn btn-ghost rounded-btn hidden lg:flex"
            >
              制作者
            </a>
            <a
              href="#thanks"
              className="text-align-center btn btn-ghost rounded-btn hidden lg:flex"
            >
              Special Thanks
            </a>
            <a
              href="#inquiry"
              className="text-align-center btn btn-ghost rounded-btn hidden lg:flex"
            >
              お問い合わせ
            </a>
            <a className="btn">楽曲提供はこちら</a>
            <div className="dropdown dropdown-end">
              <label
                tabIndex="0"
                className="btn btn-ghost rounded-btn lg:hidden"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                  <path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="dropdown-content menu rounded-box mt-4 w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <a href="#demo">デモ</a>
                </li>
                <li>
                  <a href="#news">お知らせ・更新情報</a>
                </li>
                <li>
                  <a href="#music">収録楽曲</a>
                </li>
                <li>
                  <a href="#team">制作者</a>
                </li>
                <li>
                  <a href="#thanks">Special Thanks</a>
                </li>
                <li>
                  <a href="#inquiry">お問い合わせ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
