const Inquiry = () => {
  return (
    <>
      <div id="inquiry" className="bg-base-100">
        <div className="max-w-md">
          <h2 className="ml-10 text-xl sm:ml-20 sm:text-2xl">お問い合わせ</h2>
        </div>
        <div className="mt-10 flex justify-center pb-20 sm:pb-40">
          <div className="rounded-box w-4/5 bg-secondary p-2">
            <div className="mt-10 grid w-auto grid-cols-1 justify-items-center gap-3 lg:grid-cols-2">
              <input
                type="text"
                placeholder="件名"
                className="input input-bordered w-3/5 w-full max-w-xs bg-secondary lg:ml-auto lg:mt-0 lg:mb-0 lg:mr-0"
              />
              <input
                type="text"
                placeholder="Your email"
                className="input input-bordered w-3/5 w-full max-w-xs bg-secondary lg:mr-auto lg:mt-0 lg:mb-0 lg:mr-0"
              />
            </div>
            <div className="flex justify-center">
              <textarea
                className="textarea textarea-bordered mt-3 w-3/5 bg-secondary sm:w-2/5"
                placeholder="お問い合わせ内容"
              />
            </div>
            <div className="mt-5 mb-10 flex justify-center">
              <button className="btn">送信</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inquiry
