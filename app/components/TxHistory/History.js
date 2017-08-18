// @flow
import React from "react";
import TxRow from "./TxRow";
import { formatTxDate } from "../../helpers/dateFormat";
import "../fonts.css";

const History = ({ mined, unmined, showTxDetail, intl }) => (
  <div>
    <div>
      {unmined.map(tx => <TxRow key={tx.txHash} pending {...tx} />)}
      {!unmined.length ? (<p/>) : null}
      {mined.map(tx => (
        <TxRow
          key={tx.txHash}
          {...{ showTxDetail, ...tx}}
          date={tx.timestamp ? formatTxDate(intl, new Date(tx.timestamp*1000)) : null}
        />
      ))}
      <p></p>
    </div>
  </div>
);

export default History;
