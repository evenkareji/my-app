import React from 'react';
import { parseISO, format } from 'date-fns';
import ja from 'date-fns/locale/ja';

const ConvertDate = ({ dateISO }) => {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), 'yyy年MM月dd日', {
        locale: ja,
      })}
    </time>
  );
};
export default ConvertDate;
