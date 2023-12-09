import { Suspense, lazy } from 'react'
import Dashboard from '../../components/driver/dashboard/Dashboard'
const LazyRideDataTable = lazy(() => import('../../components/driver/dashboard/RideDataTable'));


function DashboardPage() {
    return (
        <div className="h-screen bg-gray-200">
            <Dashboard />
            <Suspense fallback={<div>Loading...</div>}>
                <LazyRideDataTable />
            </Suspense>
        </div>
    )
}

export default DashboardPage