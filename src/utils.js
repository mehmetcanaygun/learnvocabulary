export const shuffle = (array) => {
  for (var a = 0; a < array.length; a++) {
    var x = array[a];
    var y = Math.floor(Math.random() * (a + 1));
    array[a] = array[y];
    array[y] = x;
  }

  return array;
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("lvState");

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);

    localStorage.setItem("lvState", serializedState);
  } catch (err) {
    console.log(err);
  }
};
