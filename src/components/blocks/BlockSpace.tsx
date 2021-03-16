// react
import React from 'react';
// third-party
import { BlockSpaceStyledComponent } from '~/styled-components/block/BlockSpace';
import classNames from 'classnames';

export type IBlockSpaceLayout =
  | 'after-header'
  | 'before-footer'
  | 'divider-xs'
  | 'divider-sm'
  | 'divider-nl'
  | 'divider-lg'
  | 'divider-xl'
  | 'spaceship-ledge-height';

interface Props extends React.HTMLAttributes<HTMLElement> {
  layout: IBlockSpaceLayout;
}

function BlockSpace(props: Props) {
  const { layout, className, ...rootProps } = props;

  return <BlockSpaceStyledComponent {...rootProps} layout={layout}/>;
}

export default React.memo(BlockSpace);
