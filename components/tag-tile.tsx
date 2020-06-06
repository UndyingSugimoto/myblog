import React from 'react';
import { Tag } from '../microCMS/types/tag';
import Link from 'next/link';
import { Path, Query } from '../types/pages/filtered/types';

type Props = {
  tag: Tag;
};

const TagTile: React.FC<Props> = ({ tag }) => {
  const query: Query = { tagsContentId: tag.id };
  return (
    <Link href={{ pathname: Path, query }}>
      <span className="text-gray-200 bg-blue-500 rounded-lg text-center w-auto cursor-pointer p-2 pr-4 pl-4">
        {tag.tagName}
      </span>
    </Link>
  );
};

export default TagTile;
