import React from 'react';

interface Props {
  titleText: string;
  style: {};
}

const BackButton: React.FC<Props> = ({ titleText, style }: Props) => {
  return (
    <h1 style={style}>{titleText}</h1>
  );
};

export default BackButton;
