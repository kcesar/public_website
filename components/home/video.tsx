export default function Video() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      poster="https://storage.googleapis.com/kcesar-website-assets/marckworth1080frame1.png"
      className="fixed -z-20 w-screen h-screen object-cover top-0 left-0 brightness-75"
    >
      <source
        src="https://storage.googleapis.com/kcesar-website-assets/marckworth1080.mp4"
        type="video/mp4"
      />
    </video>
  );
}
