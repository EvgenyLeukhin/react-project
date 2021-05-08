import React from 'react';

interface Props {
  titleText: string;
  style: {
    backgroundColor: string;
    color: string;
  };
}

const BackButton: React.FC<Props> = ({ titleText, style }: Props) => (
  <h1 style={style}>{titleText}</h1>
);

export default BackButton;