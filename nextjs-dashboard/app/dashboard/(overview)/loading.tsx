import DashboardSkeleton from '@/app/ui/skeletons';
 
export default function Loading() {
  // effectively not being used with every dynamic component being wrapped in their own <Suspense fallback />
  return <DashboardSkeleton />;
}