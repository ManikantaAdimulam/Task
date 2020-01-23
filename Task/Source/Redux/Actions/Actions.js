///
const CHANGE_STATUS = "CHANGE_STATUS";


/**
 * Add new entry
 * @memberof Actions
 * @param {*} entry
 * @returns
 */
const changeStatus = isActive => {
  return {
    type: CHANGE_STATUS,
    payload: isActive
  };
};

///
export {
  CHANGE_STATUS
};
