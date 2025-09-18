import React from 'react';

const Form = ({ formData, handleFormDataChange, handleSubmit,editIndex }) => {
  return (
    <>
      <h1 className="font-semibold text-2xl text-center mb-4 mt-4">
        Form and Table Example
      </h1>

      <form className="border rounded-lg p-4" onSubmit={handleSubmit}>
        <input
          className="w-full p-2 border rounded mb-2"
          type="text"
          placeholder="Name"
          onChange={(e) => handleFormDataChange('name', e.target.value)}
          required
          value={formData.name}
        />

        <input
          className="w-full p-2 border rounded mb-2"
          type="email"
          placeholder="Email"
          onChange={(e) => handleFormDataChange('email', e.target.value)}
          required
          value={formData.email}
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          type="submit"
        >
          {editIndex == null ? "Add":"Edit"}
        </button>
      </form>
    </>
  );
};

export default Form;
