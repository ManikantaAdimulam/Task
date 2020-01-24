///
const CHANGE_STATUS = 'CHANGE_STATUS';

///
const changeStatus = isActive => {
  console.log(`action payload: ${isActive}`);
  return {
    type: CHANGE_STATUS,
    payload: isActive,
  };
};

///
export {CHANGE_STATUS, changeStatus};
