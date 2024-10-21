// ModalComponent.jsx
import React from 'react';
import { useState } from 'react';

const ModalComponent = ({ isOpen, toggleModal }) => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [comments, setComments] = useState('');
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
            {/* Modal Header */}
            <div className="flex justify-between items-center pb-3">
              <h3 className="text-xl font-semibold">Initiate Task</h3>
              {/* Close Button */}
              <button onClick={toggleModal} className="text-gray-500 hover:text-gray-800">&times;</button>
            </div>

            {/* Modal Content */}
            <form className="space-y-4">
              {/* First Name */}
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  id="first_name"
                  value = {firstname}
                  onChange = {(e) => setFirstname(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  value = {lastname}
                  onChange = {(e) => setLastname(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              {/* Text Area */}
              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Task Details</label>
                <textarea
                  id="comments"
                  rows="4"
                  value= {comments}
                  onChange = {(e) => setComments(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                ></textarea>
              </div>

              {/* Modal Actions */}
              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={toggleModal}
                  id = "taskBtn"
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mr-2"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
