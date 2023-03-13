import React from 'react'

import { Navbar, InputField, Button } from '../../components'

export const profile = () => {
  return (
    <>
      <div className="bg-surface h-screen">
        <Navbar />
        <div className="container my-12 rounded-xl bg-white w-11 w-[766px] m-auto p-16 ">
          <div className="flex flex-col w-3/4">
            <h2 className="text-2xl font-semibold leading-7 text-gray-900 sm:truncate sm:tracking-tight">
              User account settings
            </h2>
            <p className="mt-4 text-base text-gray-500">
              Update and manage your personal information for a better experience in connecting with
              AirVenture.
            </p>
          </div>
          <div className="flex flex-row my-8 space-x-16">
            <div className="flex flex-col w-4/6">
              <InputField label="Avatar" name="avatar" iconName="camera-outline" />
              <InputField label="Name" name="name" iconName="person-outline" />
              <InputField label="Email" name="email" iconName="mail-outline" />
              <InputField label="Phone" type={'number'} iconName="call-outline" />
            </div>
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              className="h-28 w-28 m-2 rounded-full object-cover"
              alt="Profile"
            />
          </div>
          <div className="flex flex-row">
            <Button content="Save Change" variant="primary" />
            <Button content="Cancel" variant="transparent" />
          </div>
        </div>
      </div>
    </>
  )
}
export default profile
