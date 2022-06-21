function Header() {
  return (
    <>
      <div className="w-screen navbar rounded-box bg-base-300">
        <div className="flex flex-1 justify-end px-2">
          <div className="flex items-stretch">
            <a className="hidden lg:flex text-align-center btn btn-ghost rounded-btn">
              デモ
            </a>
            <a className="hidden lg:flex text-align-center btn btn-ghost rounded-btn">
              お知らせ・更新情報
            </a>
            <a className="hidden lg:flex text-align-center btn btn-ghost rounded-btn">
              収録楽曲
            </a>
            <a className="hidden lg:flex text-align-center btn btn-ghost rounded-btn">
              制作者
            </a>
            <a className="hidden lg:flex text-align-center btn btn-ghost rounded-btn">
              Special Thanks
            </a>
            <a className="hidden lg:flex text-align-center btn btn-ghost rounded-btn">
              お問い合わせ
            </a>
            <a className="btn">楽曲提供はこちら</a>
            <div className="dropdown dropdown-end">
              <label
                tabIndex="0"
                className="lg:hidden btn btn-ghost rounded-btn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                  <path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="p-2 mt-4 w-52 shadow dropdown-content menu rounded-box bg-base-100"
              >
                <li>
                  <a>デモ</a>
                </li>
                <li>
                  <a>お知らせ・更新情報</a>
                </li>
                <li>
                  <a>収録楽曲</a>
                </li>
                <li>
                  <a>制作者</a>
                </li>
                <li>
                  <a>Special Thanks</a>
                </li>
                <li>
                  <a>お問い合わせ</a>
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
