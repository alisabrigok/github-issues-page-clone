const getOptionTextColor = ({ isFocused, isSelected }) => {
  if (isFocused || isSelected) {
    return '#fff';
  }

  return '#586069';
};

const getOptionBgColor = ({ isFocused, isSelected }) => {
  if (isFocused || isSelected) {
    return '#0366d6';
  }

  return '#fff';
};

// generate emotion.js type styling - the select library uses this
export const customStyles = {
  option: (provided, state) => ({
    color: getOptionTextColor(state),
    backgroundColor: getOptionBgColor(state),
    borderBottom: '1px solid #eaecef',
    cursor: 'pointer',
    display: 'block',
    overflow: 'hidden',
    padding: '.8rem .8rem .8rem 3rem',
    fontSize: '1rem',
    width: '30rem'
  }),
  control: () => ({
    display: 'flex',
    backgroundColor: '#f6f8fa',
    color: '#586069',
    fontSize: '1.2rem',
    height: '5.5rem'
  }),
  menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)' }),
  input: () => ({
    border: '1px solid #2188ff',
    borderRadius: '.3rem',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '30rem',
    padding: '.5rem',
    width: '30rem',
    overflow: 'hidden',
    backgroundColor: '#fff',
    height: '3.4rem',
    boxShadow:
      'inset 0 1px 2px rgba(27,31,35,.075), 0 0 0 0.2em rgba(3,102,214,.3)',
    outline: 'none',
    fontSize: '1.4rem',
    cursor: 'text'
  }),
  placeholder: provided => ({
    ...provided,
    padding: '.5rem',
    maxWidth: '30rem',
    overflow: 'hidden'
  })
};
