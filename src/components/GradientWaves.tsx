function GradientWaves() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6a11cb11" />
            <stop offset="100%" stopColor="#2575fc11" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8e2de222" />
            <stop offset="100%" stopColor="#4a00e022" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a4508b33" />
            <stop offset="100%" stopColor="#5f0a8733" />
          </linearGradient>
        </defs>

        <path
          fill="url(#gradient1)"
          fillOpacity="0.6"
          d="M0,160L60,154.7C120,149,240,139,360,149.3C480,160,600,192,720,208C840,224,960,224,1080,197.3C1200,171,1320,117,1380,90.7L1440,64L1440,0L0,0Z"
        />
        <path
          fill="url(#gradient2)"
          fillOpacity="0.4"
          d="M0,192L80,186.7C160,181,320,171,480,181.3C640,192,800,224,960,224C1120,224,1280,192,1360,176L1440,160L1440,0L0,0Z"
        />
        <path
          fill="url(#gradient3)"
          fillOpacity="0.3"
          d="M0,224L100,218.7C200,213,400,203,600,213.3C800,224,1000,256,1200,250.7C1400,245,1440,224,1440,224L1440,0L0,0Z"
        />
      </svg>
    </div>
  );
}

export default GradientWaves;
