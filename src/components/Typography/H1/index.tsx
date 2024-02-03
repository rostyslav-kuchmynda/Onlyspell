import React from 'react';
import classes from './styles.module.scss';

type H1Type = {
  children: string;
};

export const H1: React.FC<H1Type> = ({ children }) => {
  // Replace all occurrences of \n with <br> globally
  debugger;
  const formattedText = children.replace(/\\n/g, "<br />");

  return (
    <h1 className={classes.h1} dangerouslySetInnerHTML={{ __html: formattedText }} />
  );
};