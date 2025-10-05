import { InputAdornment, MenuItem, Select, TextField, Typography } from "@mui/material";
import 'react-international-phone/style.css';
import {
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from 'react-international-phone';
import { Controller } from "react-hook-form";


export function Phonecontroller(props) {
  const { control, errors, name } = props
  return (
    <Controller
      control={control}
      rules={{
        required: true,
        pattern: /^\+91[6-9]\d{9}$/i

      }}
      render={({ field: { onChange, value } }) => (
        <PhoneMuiInput onChange={onChange} value={value} error={errors?.ph ? true : false} />
      )}
      name={name}


    />
  )

}


export function PhoneMuiInput(props) {
  const { value, onChange, error } = props
  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: 'us',
      value,
      countries: defaultCountries,
      onChange: (data) => {
        onChange(data.phone);
      },
    });
  return (
    <>



      <TextField
        error={error}
        placeholder="Enter Phone Number"
        fullWidth
        autoFocus
        sx={{ mb: error ? 0 : 2 }}
        onChange={handlePhoneValueChange}
        value={inputValue}
        type="tel"
        inputRef={inputRef}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              style={{ marginRight: '2px', marginLeft: '-8px' }}
            >
              <Select
                MenuProps={{
                  style: {
                    height: '300px',
                    width: '360px',
                    top: '10px',
                    left: '-34px',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                  },
                }}
                sx={{
                  width: 'max-content',
                  // Remove default outline (display only on focus)
                  fieldset: {
                    display: 'none',
                  },
                  '&.Mui-focused:has(div[aria-expanded="false"])': {
                    fieldset: {
                      display: 'block',
                    },
                  },
                  // Update default spacing
                  '.MuiSelect-select': {
                    padding: '8px',
                    paddingRight: '24px !important',
                  },
                  svg: {
                    right: 0,
                  },
                }}
                value={country.iso2}
                onChange={(e) => setCountry(e.target.value)}
                renderValue={(value) => (
                  <FlagImage iso2={value} style={{ display: 'flex' }} />
                )}
              >
                {defaultCountries.map((c) => {
                  const country = parseCountry(c);
                  return (
                    <MenuItem key={country.iso2} value={country.iso2}>
                      <FlagImage
                        iso2={country.iso2}
                        style={{ marginRight: '8px' }}
                      />
                      <Typography marginRight="8px">{country.name}</Typography>
                      <Typography color="gray">+{country.dialCode}</Typography>
                    </MenuItem>
                  );
                })}
              </Select>
            </InputAdornment>
          ),
        }}
      />
      {error && <Typography variant="caption" sx={{ mb: 2 }} color='error'>
        Invalid Phone Number
      </Typography>}


    </>
  )
}