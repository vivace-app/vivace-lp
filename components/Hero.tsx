import AppStore from '../public/svg/AppStore.svg'

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">VIVACE</h1>
            <div className="flex justify-center">
              <a
                href="https://apps.apple.com/jp/app/vivace-%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%82%BD%E3%83%BC%E3%82%B9%E3%81%AE%E9%9F%B3%E3%82%B2%E3%83%BC/id1581121832"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppStore className="mt-10 mr-2" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.vivace_app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/ja/badges/static/images/badges/en_badge_web_generic.png"
                  className="mt-8 ml-2 h-14 w-36"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
