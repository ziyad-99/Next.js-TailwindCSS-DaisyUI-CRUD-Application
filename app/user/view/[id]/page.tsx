"use client";

import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { use, useEffect, useState } from 'react'

export const UserView = () => {

    const { id } = useParams();

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetchUser();
    }, [id])

    const fetchUser = async () => {
        try {
            const resalt = await axios.get("http://laravelnextjs.test/api/user/" + id)

            setUser(resalt.data.data)

        } catch (error) {
            console.log("Somthig Wrong")
        }
    }

    console.log(user);



    return (
        <div className="w-screen py-20 flex justify-center flex-col items-center">
            <div className="flex items-center justify-center gap-1 mb-5">
                <h1 className="text-4xl font-bold">View User</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th className="py-3 px-6">{user.name}</th>
                            <th className="py-3 px-6">{user.email}</th>
                            <th className="py-3 px-6">{user.created_at}</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default UserView