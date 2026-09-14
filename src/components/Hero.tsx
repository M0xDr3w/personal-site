import { profile } from "../data/profile";

const starlinkUrl = profile.links.find((link) => link.icon === "starlink")?.url;

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-16 md:pb-32 md:pt-24">
      <div className="hero-orb hero-orb-a" aria-hidden="true" />
      <div className="hero-orb hero-orb-b" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-4xl flex-col gap-10 md:flex-row md:items-center md:gap-14">
        <div className="animate-fade-up order-1 shrink-0 md:order-2">
          <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-2xl border border-accent/40 shadow-[0_0_40px_var(--color-glow)] md:mx-0 md:h-44 md:w-44">
            <img
              src={profile.avatar}
              alt={`${profile.name} — watercolor portrait`}
              width={176}
              height={176}
              className="h-full w-full object-cover object-[42%_48%]"
            />
          </div>
        </div>

        <div className="order-2 min-w-0 md:order-1">
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.status}
          </div>

          <h1 className="animate-fade-up stagger-1 max-w-3xl font-serif text-5xl leading-[1.08] tracking-tight text-ink md:text-7xl">
            Hi, I'm{" "}
            <span className="gradient-text italic">{profile.firstName}</span>
            <br />
            {profile.lastName}.
          </h1>

          <p className="animate-fade-up stagger-2 mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            {profile.headline}
          </p>

          <p className="animate-fade-up stagger-3 mt-3 text-sm text-muted/70">
            {profile.location}
          </p>

          <p className="animate-fade-up stagger-4 mt-4 text-sm font-medium text-accent/90">
            {profile.proof}
          </p>

          <div className="animate-fade-up stagger-5 mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface transition hover:bg-accent-dim"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-ink transition hover:border-accent/50 hover:text-accent"
            >
              Say hello
            </a>
            {starlinkUrl && (
              <a
                href={starlinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-border px-5 py-3 text-sm font-medium text-ink transition hover:border-accent/50 hover:text-accent"
              >
                <svg
                  className="h-3.5 w-[5.5rem] shrink-0"
                  viewBox="0 0 310 40"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <g transform="translate(0 -47)">
                    <path d="m 10.0029,71.7839 h 6.3063 c 0.2252,2.027 0.9009,3.3784 1.8018,4.0541 0.9009,0.9008 2.4774,1.1261 4.5044,1.1261 3.8288,0 5.6306,-1.5766 5.6306,-4.5045 0,-1.3513 -0.4504,-2.4774 -1.1261,-3.1531 -1.995905,-1.553778 -4.567208,-1.70507 -6.9819,-2.027 -6.3063,-1.1261 -9.4594,-4.2793 -9.4594,-9.6846 0,-3.1531 1.1261,-5.8558 3.1531,-7.6576 2.2522,-1.8018 4.9549,-2.9279 8.5585,-2.9279 3.3783,0 6.081,0.9009 8.108,2.7027 2.027,1.8018 3.1532,4.5045 3.3784,7.6576 h -6.3063 c 0,-1.8018 -0.6756,-2.9279 -1.5765,-3.6036 C 25.0929,53.0904 23.7415,52.64 22.165,52.64 c -1.8018,0 -2.9279,0.4504 -3.8288,1.1261 -0.9009,0.6757 -1.3513,1.8018 -1.3513,3.3783 0,1.1262 0.4504,2.2523 1.1261,2.9279 0.6756,0.6757 2.027,1.1262 3.6035,1.5766 l 3.6036,0.6757 c 6.081,1.1261 9.0089,4.2792 9.0089,9.9098 0,3.6035 -1.1261,6.3062 -3.3783,8.108 -2.2523,1.8018 -5.1802,2.7027 -9.0089,2.7027 -7.359467,0.296389 -11.311292,-4.27196 -11.9369,-11.2612 z" />
                    <path d="M 65.1825,53.3157 V 82.5946 H 58.4258 V 53.3157 h -9.0089 v -5.8559 h 24.5493 v 5.8559 z" />
                    <path d="m 93.1101,75.6127 -2.027,6.7567 H 84.1012 L 96.4885,47.4598 h 5.4055 l 12.387,34.9096 h -6.982 l -2.027,-6.7567 z M 99.1912,56.694 94.9119,70.2074 h 8.5581 z" />
                    <path d="m 136.803,68.4056 v 14.189 h -6.531 V 47.6851 h 13.288 c 3.378,0 6.081,0.9008 8.108,2.7026 2.027,1.8018 3.153,4.5045 3.153,7.6576 0,2.2523 -0.45,4.2792 -1.576,5.8558 -1.126,1.5766 -2.703,2.7027 -4.505,3.6036 l 7.658,15.3152 h -7.658 l -6.531,-14.1891 h -5.406 z m 6.307,-5.6306 c 1.576,0 2.702,-0.4504 3.603,-1.3513 0.901,-0.9009 1.352,-2.027 1.352,-3.6036 0,-1.3513 -0.451,-2.4775 -1.352,-3.3784 -0.901,-0.9008 -2.027,-1.3513 -3.603,-1.3513 h -6.307 v 9.6846 z" />
                    <path d="m 179.371,47.4598 v 29.279 h 15.315 v 5.8558 H 172.839 V 47.6851 h 6.532 z" />
                    <path d="m 218.559,47.4598 v 35.1348 h -6.531 V 47.6851 h 6.531 z" />
                    <path d="m 263.829,82.5946 h -6.531 L 244.46,60.748 v 21.8466 h -6.982 V 47.6851 h 6.532 l 12.837,21.8466 V 47.6851 h 6.532 v 34.9095 z" />
                    <path d="m 289.054,65.885 v 16.4844 h -6.531 V 47.4598 h 6.531 V 64.07 l 12.162,-16.6102 h 7.883 L 296.538,65.024 310,82.3694 h -7.658 z" />
                  </g>
                </svg>
                <span className="sr-only">Starlink</span>
                referral
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
