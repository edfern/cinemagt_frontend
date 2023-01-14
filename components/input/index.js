import { TextField } from '@mui/material';

const inputStyle = {
  margin: '10px 0px 0px 0px',
  borderRadius: '50px',
  width: '100%',
};

export const InputText = ({
  title,
  name,
  type,
  onChange,
  value,
  placeholder,
  description,
  required,
  multiline,
  rows,
  maxRows,
  readOnly,
  id,
}) => {
  return (
    <div className="input">
      <label className="input-label">{title}</label>
      <TextField
        style={inputStyle}
        variant="outlined"
        name={name}
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        size="small"
        placeholder={placeholder}
        required={required}
        multiline={multiline}
        minRows={rows}
        maxRows={maxRows}
        disabled={readOnly}
      />
      {description && (
        <small className="input-description">{description}</small>
      )}
    </div>
  );
};

export const WrapInput = ({ title, children, description }) => (
  <div className="input">
    <label className="input-label">{title}</label>
    {children}
    {description && <small className="input-description">{description}</small>}
  </div>
);
