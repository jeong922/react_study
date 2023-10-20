import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from './atom';

export default function TodoListStates() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  console.log(totalCompletedNum / totalNum);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>
        <span>Percent completed</span>
        <div className='relative w-48 h-6 bg-rose-100'>
          <div
            style={{ width: `${(totalCompletedNum / totalNum) * 100}%` }}
            className={`bg-rose-400 h-full transition-all duration-300 ease-in-out`}
          ></div>
          <p className='absolute top-0 w-full text-center'>
            {formattedPercentCompleted}%
          </p>
        </div>
      </li>
    </ul>
  );
}
