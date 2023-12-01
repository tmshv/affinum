import React from 'react';

export type FlexItemProps = {
    children: React.ReactNode
}

export const LadderGalleryItem: React.FC<FlexItemProps> = ({ children }) => {
    return (
        <div>{children}</div>
    )
}
