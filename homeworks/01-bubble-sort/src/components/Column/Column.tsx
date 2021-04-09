import * as React from 'react';
import './Column.css';

interface ColumnProps {
  value: number;
}

export function Column({ value }: ColumnProps) {
  return (
    <div className="wrapper" style={{ height: `${value}px` }} />
  )
}