import React from 'react';
import { Tag } from '../microCMS/types/tag';
import TagTile from './tag-tile';

type Props = {
  tags: Tag[];
};

const TagTiles: React.FC<Props> = ({ tags }) => {
  return (
    <div className="flex flex-wrap justify-between max-w-md content-around h-28">
      {tags.map((tag) => {
        return <TagTile tag={tag} key={tag.tagId} />;
      })}
    </div>
  );
};

export default TagTiles;
