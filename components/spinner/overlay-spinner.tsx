export default function OverlaySpinner({ label }: { label?: string }) {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50 flex flex-col items-center justify-center">
      <span className="loading loading-spinner loading-xl "></span>
      {label && <p>{label}</p>}
    </div>
  );
}
