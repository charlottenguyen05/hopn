import LoadingSpinner from '@/components/LoadingSpinner';
export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <LoadingSpinner/>
    </div>
  );
}
