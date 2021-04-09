import * as React from 'react';
import { Column } from '../Column/Column';

import './SortProgress.css';

interface SortProgressProps {
  values: number[];
}

export function SortProgress({ values }: SortProgressProps) {
  return (
    <div className="values">
      {values.map((value, index) => (
        <Column value={value} key={`${value}_${index}`} />
      ))}
    </div>
  )
}