import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifySMS } from '../ApiServices/Services'

function Otp() {
    const [otp, setotp] = useState('')
    const nevigate = useNavigate()
    useEffect(() => {
        document.title = "Login"
    }, [])

    const handlesubmit = async () => {

        // take valuse from state and send to backend
        const phone = window.location.pathname.split('/')[2]
        console.log(phone)
        try {
            await verifySMS({ phone, otp }).then((res) => {
                if (res.data.message === 'OTP verified successfully') {
                    alert('OTP verified successfully')
                    nevigate('/')
                }
                else {
                    alert('OTP not verified')
                }
            })
        }
        catch (err) {
            console.log(err)
        }
    }



    return (
        <div>
            <section class="bg-gray-50 dark:bg-white">
                <div class="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
                    <div class="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-gray-700">
                        <div class="p-6 space-y-2 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-600">
                                Sign Up to your account
                            </h1>
                            <div class="space-y-5 md:space-y-6" >
                                <div>
                                    < label for="otp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                                        Enter OTP
                                    </label>
                                    <input type="text" name="otp" id="otp" class="bg-white-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="otp" required=""
                                        onChange={(e) => setotp(e.target.value)} />

                                </div>


                                <button class="w-full bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    onClick={() => { handlesubmit() }}
                                >
                                    submit otp
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Otp