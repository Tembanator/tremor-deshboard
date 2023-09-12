import { ArrowTopRightOnSquareIcon, ArrowUpIcon, BellIcon, ChartBarIcon, CreditCardIcon, EnvelopeIcon, HomeIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'
const Sidebar = () => {
  return (
    <div className='w-[50px] md:w-[80px] bg-slate-800 h-screen py-6 text-slate-300'>
      <div className='fixed left-3 md:left-5 top-4'>
        <HomeIcon className='w-8 mx-auto hover:text-slate-200 cursor-pointer' />
      </div>
      <div className='my-6 fixed top-[100px] left-3 md:left-5'>
        <ChartBarIcon className='sidebar-icon' />
        <ShieldCheckIcon className='sidebar-icon' />
        <EnvelopeIcon className='sidebar-icon' />
        <CreditCardIcon className='sidebar-icon' />
        <BellIcon className='sidebar-icon' />
      </div>
      <div className='my-6 fixed bottom-4 left-3 md:left-5'>
        <ArrowUpIcon className='sidebar-icon' />
        <ArrowTopRightOnSquareIcon className='sidebar-icon' />
      </div>
    </div>
  )
}

export default Sidebar

