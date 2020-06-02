import React from 'react';
import { Tag } from '../microCMS/types/tag';

type Props = {
  tag: Tag;
};

const TagTile: React.FC<Props> = ({ tag }) => {
  return (
    <span className="text-gray-200 bg-blue-500 rounded-lg sm:text-center w-20 cursor-pointer p-2">
      {tag.tagName}
    </span>
  );
};

export default TagTile;
