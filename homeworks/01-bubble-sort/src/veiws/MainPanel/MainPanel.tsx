import * as React from 'react';
import { SortProgress } from '../../components/SortProgress/SortProgress';
import { bubbleSort } from '../../utils/bubbleSort';
import { generateArrayWithRandomNumbers } from '../../utils/generateArrayWithRandomNumbers';
import { delay } from '../../utils/delay';

import './MainPanel.css';

const MAX_VALUE = 100;
const MAX_SIZE = 40;

type SortStatus = 'sorted' | 'inProgress' |  'notSorted';

const SORT_STATUS_DESCRIPTIONS: Record<SortStatus, string> = {
  sorted: 'Sorted',
  inProgress: 'In Progress',
  notSorted: 'Not Sorted'
}

interface MainPanelProps {
  itemsCount: number;
}

interface MainPanelState {
  values: number[];
  itemsCount: number;
  sortStatus: SortStatus;
}

export class MainPanel extends React.Component<MainPanelProps, MainPanelState> {
  constructor(props: MainPanelProps) {
    super(props);
    this.state = {
      itemsCount: props.itemsCount,
      values: generateArrayWithRandomNumbers(props.itemsCount, MAX_VALUE),
      sortStatus: 'notSorted',
    };
  }

  private sortArray = async () => {
    this.setState({ sortStatus: 'inProgress' });
    let currentData = bubbleSort(this.state.values);
    while (!currentData.fullySorted) {
      this.setState({ values: currentData.values });
      currentData = bubbleSort(currentData.values);
      await delay(100);
    }
    this.setState({ sortStatus: 'sorted' });
  };

  private generateNewValues = () => {
    this.setState({
      values: generateArrayWithRandomNumbers(this.state.itemsCount, MAX_VALUE),
      sortStatus: 'notSorted',
    })
  };

  private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      this.setState({
        itemsCount: 0,
        values: [],
      });
      return;
    }

    let parsedValue = parseInt(e.target.value);
    if (Number.isNaN(parsedValue)) return;

    parsedValue = parsedValue > MAX_SIZE ? MAX_SIZE : parsedValue;
    if (parsedValue !== this.state.itemsCount) {
      this.setState({
        itemsCount: parsedValue,
        values: generateArrayWithRandomNumbers(parsedValue, MAX_VALUE),
        sortStatus: 'notSorted',
      });
    }
  };

  render() {
    return (
      <div className="panel">
        <SortProgress values={this.state.values} />
        <label>
          <span className="description">Choose column's size (max is 40)</span>
          <input
            className="input"
            disabled={this.state.sortStatus === 'inProgress'}
            value={this.state.itemsCount}
            onChange={this.handleInputChange}
          />
        </label>
        <div className="buttons">
          <button
            disabled={!this.state.itemsCount || this.state.sortStatus === 'inProgress'}
            className="button"
            onClick={this.generateNewValues}
          >
            Generate new
          </button>
          <button
            disabled={!this.state.itemsCount || this.state.sortStatus === 'inProgress' || this.state.sortStatus === 'sorted'}
            className="button primary"
            onClick={this.sortArray}
          >
            Start
          </button>
        </div>
        <span className="status">{SORT_STATUS_DESCRIPTIONS[this.state.sortStatus]}</span>
      </div>
    );
  }
}