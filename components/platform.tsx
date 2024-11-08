import Image from "next/image";

export default function Platform() {
  return (
    <ul className="app-download-16">
      <li>
        <a href="https://play.google.com/store/apps/details?id=app.mobifit">
          <Image
            src="/images/extra/footer/play.png"
            alt="play"
            width={170}
            height={58}
          />
        </a>
      </li>
      <li>
        <a href="https://apps.apple.com/us/app/mobifit-start/id6737747199">
          <Image
            src="/images/extra/footer/app.png"
            alt="app"
            width={171}
            height={59}
          />
        </a>
      </li>
    </ul>
  );
}
