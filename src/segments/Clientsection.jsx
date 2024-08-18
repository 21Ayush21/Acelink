import React from 'react'
import Client from '../components/Client'

const Clientsection = () => {
  return (
    <section className='bg-background-linear-gradient '>
    <div className='py-20 mx-2'>
      <h2 className='text-white text-center text-3xl font-semibold '>Our Clients</h2>

      <div className='flex flex-wrap justify-center items-center gap-6 md:gap-8'>
        <Client></Client>
        <Client></Client>
        <Client></Client>
        <Client></Client>
        <Client></Client>
        <Client></Client>
      </div>
    </div>
    </section>
  )
}

export default Clientsection