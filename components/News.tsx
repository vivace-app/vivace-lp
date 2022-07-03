const News = () => {
  return (
    <>
      <div id="news" className="bg-base-100">
        <div className="max-w-md">
          <h2 className="ml-10 text-xl sm:ml-20 sm:text-2xl">
            お知らせ・更新情報
          </h2>
        </div>
        <div className="mt-10 flex justify-center">
          <ul className="menu rounded-box mb-20 w-2/3 bg-secondary p-2 sm:mb-40">
            <li>
              <a>
                Item 1
                <svg
                  className="ml-auto mt-0 mb-0 mr-0"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  width="48"
                >
                  <path d="M18.75 36 16.6 33.85 26.5 23.95 16.6 14.05 18.75 11.9 30.8 23.95Z" />
                </svg>
              </a>
            </li>
            <li>
              <a>
                Item 2
                <svg
                  className="ml-auto mt-0 mb-0 mr-0"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  width="48"
                >
                  <path d="M18.75 36 16.6 33.85 26.5 23.95 16.6 14.05 18.75 11.9 30.8 23.95Z" />
                </svg>
              </a>
            </li>
            <li>
              <a>
                Item 3
                <svg
                  className="ml-auto mt-0 mb-0 mr-0"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  width="48"
                >
                  <path d="M18.75 36 16.6 33.85 26.5 23.95 16.6 14.05 18.75 11.9 30.8 23.95Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default News
