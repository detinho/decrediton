import React from "react";
import { FormattedMessage } from "react-intl";
import "../../../style/TxHistory.less";

const Status = ({ accountName, pending, date }) => (
  <div>
    <div className="transaction-account">
      <div className="transaction-account-name">{accountName}</div>
      <div className="transaction-account-indicator">
        {pending ? (
          <div className="indicator-pending">
            <FormattedMessage id="pending" defaultMessage="Pending" />
          </div>
        ) : (
          <div className="indicator-confirmed">
            <FormattedMessage id="confirmed" defaultMessage="Confirmed" />
          </div>
        )}
      </div>
    </div>
    {pending ? null : (
      <div className="transaction-time-date"><span>{date}</span></div>
    )}
  </div>
);

export default Status;
