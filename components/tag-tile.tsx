import React from 'react';
import { Tag } from '../microCMS/types/tag';
import Link from 'next/link';
import { Path, Query } from '../pages/filtered/types';

type Props = {
  tag: Tag;
};

const TagTile: React.FC<Props> = ({ tag }) => {
  const query: Query = { tagIds: [tag.tagId] };
  return (
    <Link href={{ pathname: Path, query }}>
      <span className="text-gray-200 bg-blue-500 rounded-lg text-center w-20 cursor-pointer p-2">
        {tag.tagName}
      </span>
    </Link>
  );
};

export default TagTile;
