// react
import React, { useMemo } from 'react';
// application
import { baseUrl } from '~/services/utils';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {}

const AppImage = React.forwardRef((props: Props, ref: React.Ref<HTMLImageElement>) => {
    const { src, ...otherProps } = props;

    const normalizedSrc = useMemo(() => (src ? baseUrl(src) : src), [src]);

    return <img alt="" {...otherProps} src={normalizedSrc} ref={ref} />;
});

export default AppImage;
