export default function Content({ children }) {
  return (
    <div className='h-full rounded-md border border-slate-200 bg-white p-4'>
      {children}
    </div>
  );
}
