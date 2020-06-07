import React from 'react';
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '../lib/constants';

const SnsIcons: React.FC = () => {
  return (
    <div className="flex">
      <a href={GITHUB_URL}>
        <img src="/assets/github.svg" width="32" height="32" />
      </a>
      <a className="ml-3" href={LINKEDIN_URL}>
        <img src="/assets/linkedin.svg" width="32" height="32" />
      </a>
      <a className="ml-3" href={TWITTER_URL}>
        <img src="/assets/twitter.svg" width="32" height="32" />
      </a>
    </div>
  );
};

export default SnsIcons;
