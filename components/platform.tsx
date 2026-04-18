import Image from "next/image";

type PlatformProps = {
  className?: string;
};

export default function Platform({ className }: PlatformProps) {
  const classes = ["app-download-16", className].filter(Boolean).join(" ");

  return (
    <ul className={classes}>
      <li>
        <a
          href="https://play.google.com/store/apps/details?id=app.mobifit"
          target="_blank"
          rel="noreferrer"
          aria-label="Download MobiFit no Google Play"
        >
          <Image
            src="/images/extra/footer/play.png"
            alt="Google Play"
            width={170}
            height={58}
            style={{ height: "auto" }}
          />
        </a>
      </li>
      <li>
        <a
          href="https://apps.apple.com/us/app/mobifit-start/id6737747199"
          target="_blank"
          rel="noreferrer"
          aria-label="Download MobiFit na App Store"
        >
          <Image
            src="/images/extra/footer/app.png"
            alt="App Store"
            width={171}
            height={59}
            style={{ height: "auto" }}
          />
        </a>
      </li>
    </ul>
  );
}
