import { studioData } from '@/data/studioData';
import StudioClientPage from './StudioClientPage';

export default function HomePage() {
  return (
    <StudioClientPage
      initialMasters={studioData.masters}
      initialServices={studioData.services}
      initialReviews={studioData.reviews}
      initialPortfolio={studioData.portfolio}
    />
  );
}
