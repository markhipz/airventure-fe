import React from 'react'

function InputField({
  value = null,
  name = null,
  label = null,
  type = 'text',
  onChange,
  placeholder = null,
  iconName = null,
  error = null,
}) {
  function toLower(str) {
    return str.toLowerCase()
  }

  return (
    <div className="mb-6">
      <label htmlFor={name} className="mb-3 block text-base font-medium text-[#07074D]">
        {label}
      </label>
      <div className="relative">
        {iconName && (
          <span className="absolute top-3 left-3">
            <ion-icon style={{ color: '#3898D3' }} size="small" name={iconName}></ion-icon>
          </span>
        )}
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder ? placeholder : `input your your ${toLower(label)}`}
          value={value}
          onChange={onChange}
          className={`${type == 'number' ? 'w-3/5' : 'w-full'} ${
            iconName ? `pl-10` : `pl-4`
          } rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-primary`}
        />
      </div>
    </div>
  )
}
export default InputField
