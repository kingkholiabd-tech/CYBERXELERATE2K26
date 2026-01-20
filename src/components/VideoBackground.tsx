import bgVideo from '../assets/rmcfvsfcb.mp4';

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Gradient Sides */}
      <div className="absolute left-0 inset-y-0 w-1/2 bg-gradient-to-r from-red-950/50 to-transparent" />
      <div className="absolute right-0 inset-y-0 w-1/2 bg-gradient-to-l from-blue-950/50 to-transparent" />
    </div>
  );
}
