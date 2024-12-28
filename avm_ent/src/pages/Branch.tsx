import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Branch = () => {
  const { id } = useParams<{ id: string }>();
  const [photos, setPhotos] = useState<string[]>([]);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newPhotos = Array.from(files).map(file => URL.createObjectURL(file));
      setPhotos(prevPhotos => [...prevPhotos, ...newPhotos]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Branch {id}</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Branch Information</h2>
          <p className="text-gray-600">This is the information for Branch {id} of A.V.M Enterprises. Here you can find details about our location, services, and team.</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Branch Photos</h2>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="photoUpload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
              <input 
                id="photoUpload" 
                type="file" 
                accept="image/*" 
                multiple 
                onChange={handlePhotoUpload} 
                className="hidden" 
                aria-label="Upload branch photos"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <img key={index} src={photo} alt={`Branch ${id} photo ${index + 1}`} className="w-full h-48 object-cover rounded shadow-md" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branch;

