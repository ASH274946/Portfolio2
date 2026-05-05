export default function SiteBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 select-none overflow-hidden">
      <svg className="absolute h-0 w-0">
        <defs>
          <pattern id="siddz-grid" width="70" height="70" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          </pattern>
        </defs>
      </svg>
      <svg className="absolute inset-0 h-full w-full opacity-80" aria-hidden>
        <rect width="100%" height="100%" fill="url(#siddz-grid)" />
      </svg>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="float-blob absolute -left-[200px] -top-[200px] h-[800px] w-[800px] opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(118, 75, 162, 0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="float-blob-reverse absolute -right-[200px] top-[30%] h-[600px] w-[600px] opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(250, 32, 210, 0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="float-blob absolute bottom-0 left-[10%] h-[500px] w-[500px] opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(79, 172, 254, 0.15) 0%, transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}
