import Image from "next/image";

export default function Platform() {
  return (
    <div className="amazing-platform-area">
      <div className="amazing-platform-item">
        <a
          href="https://apps.apple.com/us/app/mobifit-start/id6737747199"
          className="active"
        >
          <div className="amazing-platform-thumb">
              <Image
                src="/images/app-ios.svg"
                alt="app"
                width={30}
                height={30}
              />
          </div>
          <span className="cl-white">iOS</span>
        </a>
      </div>
      <div className="amazing-platform-item">
        <a href="https://play.google.com/store/apps/details?id=app.mobifit">
          <div className="amazing-platform-thumb">
              <Image
                src="/images/app-android.svg"
                alt="app"
                width={30}
                height={30}
              />
            
          </div>
          <span className="cl-white">Android</span>
        </a>
      </div>
    </div>
  );
}