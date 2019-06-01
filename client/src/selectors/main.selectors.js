import { createSelector } from "reselect";
import { filter, sortBy, toLower } from "lodash/fp";
import moment from "moment";

const mainSelector = state => state.main;

export const filterTermSelector = createSelector(
  [mainSelector],
  mainData => mainData.filterTerm
);

const messagesSelector = createSelector(
  [mainSelector],
  mainData => mainData.messages
);

export const errorSelector = createSelector(
  [mainSelector],
  mainData => mainData.error
);

export const filteredMessagesSelector = createSelector(
  [messagesSelector, filterTermSelector],
  (messages, filterTerm) => {
    const filteredMessages = filter(
      message =>
        toLower(message.email).includes(toLower(filterTerm)) ||
        toLower(message.text).includes(toLower(filterTerm)),
      messages
    );

    return sortBy(
      message => moment(message.created).valueOf(),
      filteredMessages
    ).reverse();
  }
);
