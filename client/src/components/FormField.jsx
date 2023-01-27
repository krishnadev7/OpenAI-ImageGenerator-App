import React from 'react';

function FormField({
  LabelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) {
  return (
    <div>
      <div className='flex items-center mb-2 gap-2'>
        <label
          htmlFor={name}
          className='block text-sm font-medium text-gray-900'
        >
          {LabelName}
        </label>
        {isSurpriseMe && (
          <button
            className='font-semibold py-1 px-2 text-xs bg-[#ECECF1] hover:bg-[#d7d7e7] rounded-[5px] text-black'
            type='button'
            onClick={handleSurpriseMe}
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='bg-gray-50 border border-gray-300 
        text-gray-900 text-sm rounded-lg focus:ring-[#4649ff]
        focus:border-[#4649ff] ouline-none block w-full p-3
        '
      />
    </div>
  );
}

export default FormField;
