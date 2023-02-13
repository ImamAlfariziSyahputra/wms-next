export default function Bar({ animationDuration, progress }) {
  return (
    <div
      className='fixed left-0 top-0 z-[9999] h-1 w-full bg-purple-600'
      style={{
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin-left ${animationDuration}ms linear`,
      }}
    />
  );
}
