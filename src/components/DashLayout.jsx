import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'

const DashLayout = () => {
    return (
        <>
          <div className='flex flex-col min-h-screen'>
            <DashHeader />
            <div className="bg-slate-100 flex-grow">
                <Outlet />
            </div>
            <DashFooter />
          </div>
        </>
    )
}
export default DashLayout