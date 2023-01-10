export const useInput = (initalValue, vaildator) => {
  const [value, setValue] = useState(initalValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof vaildator === "function") {
      willUpdate = vaildator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
