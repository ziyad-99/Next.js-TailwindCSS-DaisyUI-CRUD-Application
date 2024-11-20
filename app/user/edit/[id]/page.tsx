"use client";

import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const UserEdit = () => {

    const { id } = useParams();

    const [userFields, setUserFields] = useState({
        name: "",
        email: "",
        password: ""
    });

    useEffect(() => {

        fetchUser();

    }, [id]);

    const fetchUser = async () => {
        try {
            const result = await axios.get("http://laravelnextjs.test/api/user/" + id)

            console.log(result.data.data);
            setUserFields(result.data.data);

        } catch (error) {
            console.log("Somthig Wrong" + error)
        }
    }

    const changeUserFieldHandler = (e) => {
        setUserFields({
            ...userFields,
            [e.target.name]: e.target.value
        })

        console.log(userFields);
    }

    const onSubmitChange = async (e) => {

        e.preventDefault();

        try {
            await axios.put("http://laravelnextjs.test/api/user-update/" + id, userFields)
            window.location.href = "/";
        } catch (error) {
            console.log("Somthing Wrong" + error)
        }
    }

    return (
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2xl text-center mb-2">Edit User</h1>
            <form className="form-control gap-y-2">
                <input type='text' name='id' value={id} disabled />
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow" name="name" placeholder="name"
                        value={userFields.name}
                        onChange={(e) => changeUserFieldHandler(e)} />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" name='email' placeholder="Email"
                        value={userFields.email}
                        onChange={(e) => changeUserFieldHandler(e)} />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" name='password' placeholder="password"
                        onChange={(e) => changeUserFieldHandler(e)} />
                </label>
                <button className="btn btn-success font-bold text-gray-700"
                    onClick={e => onSubmitChange(e)}>
                    Update
                </button>
            </form>
        </div>
    )
}

export default UserEdit