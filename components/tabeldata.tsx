"use client";

import React, { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"

export const Users = () => {

    const [usersData, setUserData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const result = await axios("http://laravelnextjs.test/api/all-users")
            console.log(result.data);
            setUserData(result.data.data)
        } catch (err) {
            console.log("somthig wrong " + err);
        }
    }

    const hundelDelete = async (id) => {
        console.log(id);
        await axios.delete("http://laravelnextjs.test/api/user-delete/" + id)
        const newUsersData = usersData.filter((item) => {
            return (
                item.id !== id
            )
        })
        setUserData(newUsersData);
    }

    return (
        <table className="table">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th className="py-3 px-6">#</th>
                    <th className="py-3 px-6">Name</th>
                    <th className="py-3 px-6">Email</th>
                    <th className="py-3 px-6">Create at</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {usersData.map((user, index) => (
                    <tr key={user.id} className="bg-white text-gray-700 border-b">
                        <th className="py-3 px-6">{index + 1}</th>
                        <td className="py-3 px-6">{user.name}</td>
                        <td className="py-3 px-6">{user.email}</td>
                        <td className="py-3 px-6">{user.created_at}</td>
                        <td className="flex justify-center gap-1 py-3">
                            <Link href={`/user/view/${user.id}`} className="btn btn-info">View</Link>
                            <Link href={`/user/edit/${user.id}`} className="btn btn-primary">Edit</Link>
                            <button className="btn btn-secondary" onClick={() => hundelDelete(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Users
