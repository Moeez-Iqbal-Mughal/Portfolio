import React from 'react'

function ContactInfo({icon, details}) {
  return (
    <div className='flex items-center gap-2 mt-3'>
      <div className="text-2xl sm:text-3xl text-white hover:text-orange-500">
        {icon}
      </div>
      <p className="text-base sm:text-lg text-orange-500 font-semibold">{details}</p>
    </div>
  )
}

export default ContactInfo