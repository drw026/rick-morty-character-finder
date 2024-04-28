import { createLazyFileRoute } from '@tanstack/react-router'
import Overview from '@/pages/Overview.tsx';

export const Route = createLazyFileRoute('/')({
  component: Overview,
})
