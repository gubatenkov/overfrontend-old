import { FC } from 'react';
import BlockContent from '@sanity/block-content-to-react';

import useSerializers from 'utils/hooks/useSerializers';

interface IProps {
  content: object[] | undefined
}

const PostBody: FC<IProps> = ({ content }) => {
  const serializers = useSerializers();

  return (
    <BlockContent
      blocks={content}
      serializers={serializers}
      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
    />
  );
};

export default PostBody;
