import { createLazyFileRoute } from '@tanstack/react-router'
import OverviewPage from '@/components/OverviewPage/OverviewPage.tsx';

export const Route = createLazyFileRoute('/')({
  component: OverviewPage,
})
