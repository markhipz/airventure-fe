import { useEffect, useState } from 'react'

import { Button, Navbar } from '../../components'

import { get, remove, post } from '../../utils/ApiCaller'
import LocalStorageUtils from '../../utils/LocalStorageUtils'

export const AccountManagement = () => {
  const [accounts, setAccounts] = useState([])
  const [isToggleModal, setToggleModal] = useState(false)

  const onClickDeactivateButton = (accountId) => async () => {
    await remove(`/v1/api/accounts/deactivate/${accountId}`, {}, {})
    // TODO: Api Refactor
    window.location.reload()
  }

  const onClickActivateButton = (accountId) => async () => {
    // TODO: Api Refactor
    await post(`/v1/api/accounts/activate/${accountId}`, {}, {})
    window.location.reload()
  }

  const onClickCreateNewEmployee = () => {}

  useEffect(() => {
    const fetchAccounts = async () => {
      const response = await get('/v1/api/accounts', {}, {})
      const listOfAccounts = response.data
      setAccounts(() => [...listOfAccounts.data])
    }
    fetchAccounts()
  }, [])
  return (
    <div className="bg-surface h-screen mb-10">
      <Navbar />
      {/* <div className="container my-12 rounded-xl bg-white w-11 w-[766px] m-auto p-16 ">
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
            <div className="flex flex-row space-x-4">
              <InputField label="Last Name" name="name" iconName="person-outline" />
              <InputField label="First Name" name="username" iconName="person-outline" />
            </div>
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
      </div> */}
      <div className="container my-12 rounded-xl w-5/6 m-auto flex justify-end">
        <Button content={'Create new employee'} />
      </div>
      <div className="container my-12 rounded-xl bg-white w-5/6 m-auto mb-20">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-base text-gray-700 bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Is Active
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {accounts.length > 0
                ? accounts.map((account) => (
                    <tr key={account.id} className="bg-white border-b">
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {account?.email}
                      </td>
                      <td className="px-6 py-4">{account?.customer?.firstName}</td>
                      <td className="px-6 py-4">{account?.customer?.lastName}</td>
                      <td className="px-6 py-4">{account?.role?.name}</td>
                      <td className="px-6 py-4">{account?.customer?.gender}</td>
                      <td className="px-6 py-4">{account?.isActive ? 'Active' : 'Inactive'}</td>
                      <td className="px-6 py-4">{account?.customer?.phoneNumber}</td>
                      <td className="px-6 py-4">
                        {LocalStorageUtils.getJWTUser().id !== account?.id ? (
                          account?.isActive ? (
                            <Button
                              content="Deactivate"
                              variant="outline"
                              onClick={onClickDeactivateButton(account.id)}
                            />
                          ) : (
                            <Button
                              content="Activate"
                              onClick={onClickActivateButton(account.id)}
                            />
                          )
                        ) : null}
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default AccountManagement
