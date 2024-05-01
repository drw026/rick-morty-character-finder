import { render, screen } from '@testing-library/react';
import {
  Episode, EpisodeCharacters,
  EpisodeOrigin,
  EpisodeOrigins,
  EpisodeOriginTitle,
  EpisodeTitle
} from '@/components/Episode/Episode.tsx';

describe('Episode', () => {
  describe('Episode component', () => {
    it('should render without crashing', () => {
      render(<Episode />)
    });

    it('should render children', () => {
      render(<Episode>Episode</Episode>);
      expect(screen.getByText('Episode')).toBeVisible();
    });
  });

  describe('EpisodeTitle', () => {
    it('should render without crashing', () => {
      render(<EpisodeTitle />)
    });

    it('should render the title', () => {
      render(<EpisodeTitle>Episode Title</EpisodeTitle>);
      expect(screen.getByText('Episode Title')).toBeVisible();
    });
  });

  describe('EpisodeOrigins', () => {
    it('should render without crashing', () => {
      render(<EpisodeOrigins />)
    });

    it('should render origins', () => {
      render(<EpisodeOrigins>Origins</EpisodeOrigins>)
      expect(screen.getByText('Origins')).toBeVisible();
    });
  });

  describe('Episode Origin', () => {
    it('should render without crashing', () => {
      render(<EpisodeOrigin />)
    });

    it('should render origin', () => {
      render(<EpisodeOrigin>Origin</EpisodeOrigin>)
      expect(screen.getByText('Origin')).toBeVisible();
    });
  });

  describe('EpisodeOriginTitle', () => {
    it('should render without crashing', () => {
      render(<EpisodeOriginTitle />)
    });

    it('should render origin title', () => {
      render(<EpisodeOriginTitle>Origin Title</EpisodeOriginTitle>)
      expect(screen.getByText('Origin Title')).toBeVisible();
    });
  })

  describe('EpisodeCharacters', () => {
    it('should render without crashing', () => {
      render(<EpisodeCharacters />)
    });

    it('should render Characters', () => {
      render(<EpisodeCharacters>Characters</EpisodeCharacters>)
      expect(screen.getByText('Characters')).toBeVisible();
    });
  })
});
