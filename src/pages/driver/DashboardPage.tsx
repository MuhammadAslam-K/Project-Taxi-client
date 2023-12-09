import { Suspense, lazy } from 'react'
import Dashboard from '../../components/driver/dashboard/Dashboard'
import DriverNavbar from '../../components/driver/common/Navbar';
const LazyRideDataTable = lazy(() => import('../../components/driver/dashboard/RideDataTable'));


function DashboardPage() {
    return (
        <div className="h-screen bg-gray-200">
            <DriverNavbar />
            <Dashboard />
            <Suspense fallback={<div>Loading...</div>}>
                <LazyRideDataTable />
            </Suspense>
        </div>
    )
}

export default DashboardPage