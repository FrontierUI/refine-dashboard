import React from 'react';

import type { AvatarProps } from 'antd';
import { Avatar as AntdAvatar } from 'antd';

import { getNameInitials, getRandomColorFromString } from '../utilities';

type Props = AvatarProps & {
  name?: string;
};

const CustomAvatarComponent = ({ name = '', style, ...rest }: Props) => {
  return (
    <AntdAvatar
      alt={name}
      size="small"
      {...rest}
      style={{
        backgroundColor: rest?.src
          ? 'transparent'
          : getRandomColorFromString(name),
        background: '#87d068',
        display: 'flex',
        alignItems: 'center',
        border: 'none',
        ...style,
      }}
    >
      {getNameInitials(name || '')}
    </AntdAvatar>
  );
};

export const CustomAvatar = React.memo(
  CustomAvatarComponent,
  (prevProps, nextProps) => {
    return prevProps.name === nextProps.name && prevProps.src === nextProps.src;
  }
);
