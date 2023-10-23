import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { sendSMS } from '../ApiServices/Services'
import { useDispatch } from 'react-redux'
import { autho } from '../Redux/AuthoApi';
function Login() {
    const [contrycode, setCountryCode] = useState(''); // Corrected variable name
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    const authodispach = useDispatch();
    const handleSubmit = async () => {
        try {
            await sendSMS({ contrycode, phone }).then((res) => {
                if (res.data.status === 'true') {
                    alert('OTP sent')
                    localStorage.setItem('phone', "+91" + phone)
                    authodispach(autho({ autho: true }))
                    navigate(`/otp/+${contrycode + phone}`)
                }
                else {
                    alert('OTP not sent')
                }
            })


        } catch (err) {
            console.error(err);
        }
    }



    return (
        <div>
            <section className="bg-gray-50 dark:bg-white">
                <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-gray-700">
                        <div className="p-6 space-y-2 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-600">
                                Sign Up to your account
                            </h1>
                            <divs className="space-y-5 md:space-y-6" >
                                <div>
                                    <label htmlFor="country-code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Country Code</label>
                                    <input
                                        type="text"
                                        name="country-code"
                                        id="country-code"
                                        className="bg-white-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="+1"
                                        required
                                        value={contrycode}
                                        onChange={(e) => setCountryCode(e.target.value)} // Corrected event and attribute names
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Mobile Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone-number"
                                        id="phone-number"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="123-456-7890"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)} // Corrected event and attribute names
                                    />
                                </div>

                                <button
                                    type="" // Corrected type
                                    className="w-full bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800"
                                    onClick={handleSubmit} // Corrected event
                                >
                                    Send OTP
                                </button>
                            </divs>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Login