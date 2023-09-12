import Chart from './components/Chart'
import CardSales from './components/CardSales'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import TableComponent from './components/TableComponent'
import TabsComponent from './components/TabsComponent'
import WebAnalyticsComponent from './components/WebAnalyticsComponent'


function App() {

  return (
    <main className='flex'>
      <Sidebar />
      <div className='w-full'>
        <Navbar />
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='col-span-2 p-6 md:px-0'>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <CardSales />
              <CardSales />
              <CardSales />
            </div>
            <div className="w-full py-4">
              <Chart />
              <TableComponent />
            </div>
          </div>
          <div className='w-full p-6 flex flex-col gap-3 mt-[-60px] md:mt-0'>
            <TabsComponent />
            <WebAnalyticsComponent />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
