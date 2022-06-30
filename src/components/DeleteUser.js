import { toast } from 'react-toastify';
import React from 'react';
import { useQuery } from 'react-query';
import Spinner from './Spinner';
import { Link } from "react-router-dom";


const DeleteUser = () => {

    let { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:8000/users').then(res => res.json()));

    if (isLoading) {
        return <Spinner> </Spinner>
    }

    let deleteUser = id => {

        let yes = window.confirm('Are you sure to DELETE user?');

        if (yes) {
            fetch(`http://localhost:8000/deleteUser/${id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                },

            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    toast.error('User Deleted');
                    refetch();

                })
        }

    }

    return (
        <div>

            <div className=' flex justify-end '>
                <Link to='/' className='px-4 py-2 text-lg font-mono border-2 rounded-lg mx-4 bg-sky-200 text-yellow-600 hover:border-red-300 hover:bg-white hover:text-red-700 '> <i class="fa-solid fa-house-chimney-crack"></i> Back Home </Link>
                <Link to='/useradd' className='px-4 py-2 text-lg font-mono border-2 rounded-lg mx-4 bg-sky-200 text-yellow-600 hover:border-red-300 hover:bg-white hover:text-red-700 '> <i class="fa-solid fa-person-circle-plus"></i> Add User </Link>
            </div>

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
                                        <button onClick={() => deleteUser(user._id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete User</button>
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