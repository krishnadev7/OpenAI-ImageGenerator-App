import React from 'react';
import { useNavigate } from 'react-router-dom';

import { getRandomPrompt } from '../utils';
import { preview } from '../assets';
import { Loader, FormField } from '../components';
import { useState } from 'react';

function CreatePost() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    photo: '',
    prompt: '',
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = () => {};

  const handleSubmit = () => {};

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt)
    setForm({...form,prompt:randomPrompt})
  };

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
        <p className='mt-2  text-[16px] text-[#666e75] max-w[500px]'>
          Create imaginative and visually stunning images through DALL-E AI and
          share them with the community
        </p>
      </div>
      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField
            LabelName='Your name'
            type='text'
            name='name'
            placeholder='John Doe'
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            LabelName='Prompt'
            type='text'
            name='prompt'
            placeholder='Spongebob Squarepants in the Blair Witch Project'
            value={form.prompt}
            isSurpriseMe
            handleChange={handleChange}
            defaultValue='Initial value'
            handleSurpriseMe={handleSurpriseMe}
          />
          <div
            className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm
      rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex
      justify-center items-center
      '
          >
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className='w-full h-full object-contain'
              />
            ) : (
              <img
                src={preview}
                alt='preview'
                className='w-9/12 h-9/12 object-contain opacity-40'
              />
            )}
            {generatingImg && (
              <div className='absolute inset-0 z-0 flex justify-center items-center  rounded-lg bg-[rgba(0,0,0,0.5)]'>
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className='mt-5 flex gap-5'>
          <button
            type='button'
            onClick={generateImage}
            className='text-white bg-green-700 hover:bg-green-600 font-medium text-sm rounded-md w-full sm:w-auto px-5 py-2.5 text-center'
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>
        <div className='mt-10'>
          <p className='mt-2 text-[#666e75] text-[14px]'>
            Once you have created the image you want, You can share it with
            other in the community
          </p>
          <button
            type='submit'
            className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
          >
            {loading ? 'Sharing...' : 'Share with the community'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default CreatePost;