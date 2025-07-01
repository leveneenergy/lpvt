import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '@styles/button.css'

const ContactForm = () => {
    const [loading, setLoading] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [display, setDisplay] = useState(false)
    const [error, setError] = useState(false)
    const [contactDetails, setContactDetails] = useState({
        first_name: '',
        last_name: '',
        solar_business_type: '',
        solar_panels_deployed: '',
        solar_project_capacity: '',
        company_name: '',
        job_role: '',
        email: '',
        whatsapp: '',
        phone: '',
        how_heard: ''
    })
    const {
        first_name, last_name, solar_business_type, solar_panels_deployed, solar_project_capacity,
        company_name, job_role, email, whatsapp, phone, how_heard
    } = contactDetails;
   const contactForm = useRef<any>();

    const r = {
        onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
            setContactDetails({
                ...contactDetails,
                [e.target.name]: e.target.value
            })
        },
        async sendMail(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault()
            if (!contactForm.current) return;
            try {
                setLoading(true);const mail = await emailjs.sendForm(
                  import.meta.env.PUBLIC_MAIL_SERVICE_ID_II as string,
                  import.meta.env.PUBLIC_MAIL_TEMPLATE_ID_II as string,
                  contactForm.current,
                  import.meta.env.PUBLIC_MAIL_PUBLIC_KEY_II as string
  );  
                if (mail) {
                    setAlertMessage('Thank you for reaching out to us! Be rest assured we will revert soon');
                    setDisplay(true)
                    setTimeout(() => setDisplay(false), 5000)
                    setError(false)
                    contactForm.current.reset();
                    setContactDetails({
                        first_name: '',
                        last_name: '',
                        solar_business_type: '',
                        solar_panels_deployed: '',
                        solar_project_capacity: '',
                        company_name: '',
                        job_role: '',
                        email: '',
                        whatsapp: '',
                        phone: '',
                        how_heard: ''
                    });
                } else {
                    setAlertMessage('Something went wrong! Please try again')
                    setDisplay(true)
                    setTimeout(() => setDisplay(false), 5000)
                    setError(true)
                }
                setLoading(false);
            } catch (error: any) {
                console.error(error?.text || error);
                setAlertMessage('Something went wrong! Please try again');
                setDisplay(true);
                setTimeout(() => setDisplay(false), 5000);
                setError(true);
                setLoading(false);
            }
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <form  ref={contactForm} onSubmit={(e) => r.sendMail(e)} className="w-full max-w-xl px-4 py-4 bg-white rounded-lg shadow">
            {/* Alert */}
            {display && (
                <div className={`px-5 py-3 mb-3 ${error ? 'bg-[#fca5a5]' : 'bg-[#86efac]'} rounded-xl`}>
                    <p className='font-semibold text-white'>{alertMessage}</p>
                </div>
            )}
            {/* End of alert */}

            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {/* First Name */}
                <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">First Name <span className="text-red-500">*</span></label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            placeholder="First Name"
                            required
                            className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 placeholder:text-gray-400 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6"
                           onChange={(e) => r.onChange(e)}
                            value={first_name}
                        />
                    </div>
                </div>
                {/* Last Name */}
                <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Last Name <span className="text-red-500">*</span></label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            placeholder="Last Name"
                            required
                            className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 placeholder:text-gray-400 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6"
                            onChange={(e) => r.onChange(e)}
                            value={last_name}
                        />
                    </div>
                </div>
                {/* Solar Business Type */}
                <div className="sm:col-span-6">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Solar Business Type <span className="text-red-500">*</span></label>
                    <div className="mt-2">
                        <select
                            name="solar_business_type"
                            id="solar_business_type"
                            required
                            className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6"
                            onChange={(e) => r.onChange(e)}
                            value={solar_business_type}
                        >
                            <option value="" disabled>Select an option</option>
                            <option value="developer">Solar & Mini-grid Developer</option>
                            <option value="installer">Solar Installer / Dealer</option>
                            <option value="distributor">Solar Distributor</option>
                        </select>
                    </div>
                </div>
                {/* Panels Deployed */}
                <div className="sm:col-span-6">
                    <label className="block text-sm font-medium leading-6 text-gray-900">On average, how many solar panels do you deploy annually? <span className="text-red-500">*</span></label>
                    <div className="mt-2">
                        <select
                            name="solar_panels_deployed"
                            id="solar_panels_deployed"
                            required
                            className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6"
                            onChange={(e) => r.onChange(e)}
                            value={solar_panels_deployed}
                        >
                            <option value="" disabled>Select an option</option>
                            <option value="1-199">1 – 199 Panels</option>
                            <option value="200-499">200 - 499 Panels</option>
                            <option value="500-1999">500 – 1,999 Panels</option>
                            <option value="2000-9999">2000 – 9,999 Panels</option>
                            <option value="10000+">Above 10,000 Panels</option>
                        </select>
                    </div>
                </div>
                {/* Project Capacity */}
                <div className="sm:col-span-6">
                    <label className="block text-sm font-medium leading-6 text-gray-900">What capacity of solar projects do you mostly handle? <span className="text-red-500">*</span></label>
                    <div className="mt-2">
                        <select
                            name="solar_project_capacity"
                            id="solar_project_capacity"
                            required
                            className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6"
                           onChange={(e) => r.onChange(e)}
                            value={solar_project_capacity}
                        >
                            <option value="" disabled>Select an option</option>
                            <option value="below-3kw">Below 3kW</option>
                            <option value="3-20kw">3kW – 20kW</option>
                            <option value="30-100kw">30kW – 100kW</option>
                            <option value="200-500kw">200kW – 500kW</option>
                            <option value="above-1mw">Above 1MW</option>
                        </select>
                    </div>
                </div>
                {/* Company Name */}
                <div className="sm:col-span-6">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Company Name <span className="text-red-500">*</span></label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="company_name"
                            id="company_name"
                            placeholder="Company Name"
                            required
                            className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 placeholder:text-gray-400 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6"
                            onChange={(e) => r.onChange(e)}
                            value={company_name}
                        />
                    </div>
                </div>
                {/* Job Role */}
                <div className="sm:col-span-6">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Job Role <span className="text-red-500">*</span></label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="job_role"
                            id="job_role"
                            placeholder="Job Role"
                            required
                            className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 placeholder:text-gray-400 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6"
                            onChange={(e) => r.onChange(e)}
                            value={job_role}
                        />
                    </div>
                </div>
                {/* Email Address */}
                <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Email Address <span className="text-red-500">*</span></label>
                    <div className="mt-2">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            required
                            className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 placeholder:text-gray-400 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6"
                            onChange={(e) => r.onChange(e)}
                            value={email}
                        />
                    </div>
                </div>
                {/* WhatsApp */}
                <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">WhatsApp</label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="whatsapp"
                            id="whatsapp"
                            placeholder="WhatsApp"
                            className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 placeholder:text-gray-400 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6"
                            onChange={(e) => r.onChange(e)}
                            value={whatsapp}
                        />
                    </div>
                </div>
                {/* Phone */}
                <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Phone <span className="text-red-500">*</span></label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Phone"
                            required
                            className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 placeholder:text-gray-400 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6"
                            onChange={(e) => r.onChange(e)}
                            value={phone}
                        />
                    </div>
                </div>
                {/* How did you hear about us? */}
                <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">How did you hear about us?</label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="how_heard"
                            id="how_heard"
                            placeholder="How did you hear about us?"
                            className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 placeholder:text-gray-400 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6"
                            onChange={(e) => r.onChange(e)}
                            value={how_heard}
                        />
                    </div>
                </div>
            </div>

           <div className="col-span-full my-5 flex items-center gap-4">
    <button
        type="submit"
        className={`block w-[max-content] ${loading ? 'px-14 py-3 flex rounded-[10px] justify-center items-center' : `px-3 py-2 rounded-xl ${((!first_name || !last_name || !solar_business_type || !solar_panels_deployed || !solar_project_capacity || !company_name || !job_role || !email || !phone) || loading) ? '_disabled' : 'hover:bg-darkBlue cursor-pointer'}`} text-base text-center text-white text-[14px] bg-[#0FCC7C] baseline ${((!first_name || !last_name || !solar_business_type || !solar_panels_deployed || !solar_project_capacity || !company_name || !job_role || !email || !phone) || loading) && '_disabled'}`}
        disabled={(!first_name || !last_name || !solar_business_type || !solar_panels_deployed || !solar_project_capacity || !company_name || !job_role || !email || !phone) || loading}
    >
        {loading ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        ) : (
            <>Submit</>
        )}
    </button>
   <button
    type="button"
    onClick={() => window.history.back()}
    className="block w-[max-content] px-3 py-2 rounded-xl text-base text-center text-white text-[14px] bg-[#0FCC7C] hover:bg-darkBlue cursor-pointer transition ml-16 md:ml-64"
    style={{ textDecoration: 'none' }}
>
    Go back
</button>
</div>
<p className="text-sm text-gray-600  mt-2">*Fill completely before submitting *By submitting, you agree to our Privacy Policy.</p>
           
        </form>
        </div>
    )
}

export default ContactForm;