import React from 'react';
import { useQuery } from 'react-query';
import Spinner from './Spinner';

const DeleteUser = () => {

    let { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:8000/users').then(res => res.json()));

    if (isLoading) {
        return <Spinner> </Spinner>
    }

    return (
        <div>
            <div>

                <i className='text-5xl flex justify-center my-10'> Total Users {users.length} </i>

                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    User name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Number
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map(user => <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        {
                                            user.name
                                        }
                                    </th>
                                    <td class="px-6 py-4">
                                        {
                                            user.email
                                        }
                                    </td>
                                    <td class="px-6 py-4">
                                        {
                                            user.number
                                        }
                                    </td>
                                    <td class="px-6 py-4">
                                        {
                                            user.address
                                        }
                                    </td>
                                    <td class="px-6 py-4 ">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete User</a>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default DeleteUser;