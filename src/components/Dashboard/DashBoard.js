import React from 'react'
import './dashboard.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { getAllLength } from './../../services/addFile/FilesApi';
import BizFiles from '../AddFile/BizFiles';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
function DashBoard() {
  const [length, setLength] = React.useState({})


  const getLengths = () => {
    getAllLength().then((res) => {
      setLength(res)
      console.log(res)
    })
      .catch((e) => {
        console.log(e)
      })
  }
  React.useEffect(() => {
    getLengths()
  }, [])

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: [10, 30, 46, 38, 60, 50,],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <div>
      <main>
        <div className="container-fluid px-4">
          <h1 className="mt-4">Dashboard</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <div className="card bg-primary text-white mb-4" id="dash__card">
                <div className="card-body">USER'S</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  {
                    length.users ?
                      <p className="small text-white stretched-link">{length.users}</p>
                      :
                      <p className="small text-white stretched-link" >0</p>

                  }
                  {/* <a className="small text-white stretched-link" href="#">View Details</a> */}
                  <div className="small text-white"><svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" /></svg></div>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-3 col-md-6">
              <div className="card bg-warning text-white mb-4" id="dash__card">
                <div className="card-body">BIZ FILES</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  {
                    length.fileCount ?
                      <p className="small text-white stretched-link">{length.fileCount}</p>
                      :
                      <p className="small text-white stretched-link" >0</p>
                  }
                  <div className="small text-white"><svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" /></svg></div>
                </div>
              </div>
            </div> */}
            <div className="col-xl-6 col-md-6">
              <div className="card bg-success text-white mb-4" id="dash__card">
                <div className="card-body">BIZ FILES</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  {
                    length.fileCount ?
                      <p className="small text-white stretched-link">{length.fileCount}</p>
                      :
                      <p className="small text-white stretched-link" >0</p>
                  }
                  {/* <a className="small text-white stretched-link" href="#">View Details</a> */}
                  <div className="small text-white"><svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" /></svg></div>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-3 col-md-6">
              <div className="card bg-danger text-white mb-4" id="dash__card">
                <div className="card-body">Danger Card</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <div className="small text-white"><svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg><path fill="currentColor" d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" /></svg></div>
                </div>

              </div>
            </div> */}
          </div>
          <div className="row mt-5">
            <div className="col-xl-6">
              <Line options={options} data={data} />;
            </div>
            <div className="col-xl-6">
              <Bar options={options} data={data} />;
            </div>
          </div>

          <div className="card  mt-5" id='dash__card'>
            <div className="card-header">
              {/* <i class="fas fa-table me-1"></i> Font Awesome fontawesome.com */}
              DataTable Example
            </div>
            <BizFiles />
            {/* <div className="card-body">
              <div className="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns"><div className="datatable-top d-flex justify-content-between">
                <div className="datatable-dropdown">
                  <label>
                    <select className="datatable-selector"><option value={5}>5</option><option value={10} selected>10</option><option value={15}>15</option><option value={20}>20</option><option value={25}>25</option></select> entries per page
                  </label>
                </div>
                <div className="datatable-search" data-dashlane-rid="beb2978c3bea59ae" data-form-type>
                  <input className="datatable-input" placeholder="Search..." type="search" title="Search within table" aria-controls="datatablesSimple" data-dashlane-rid="d3d38c36c72bdbd7" data-form-type />
                </div>
              </div>
                <div className="datatable-container d-flex justify-content-between flex-column"><table id="datatablesSimple" className="datatable-table"><thead><tr><th data-sortable="true" style={{ width: '20.144284128745838%' }}><a href="#" className="datatable-sorter">Name</a></th><th data-sortable="true" style={{ width: '31.90899001109878%' }}><a href="#" className="datatable-sorter">Position</a></th><th data-sortable="true" style={{ width: '15.427302996670367%' }}><a href="#" className="datatable-sorter">Office</a></th><th data-sortable="true" style={{ width: '6.326304106548279%' }}><a href="#" className="datatable-sorter">Age</a></th><th data-sortable="true" style={{ width: '13.485016648168703%' }}><a href="#" className="datatable-sorter">Start date</a></th><th data-sortable="true" style={{ width: '12.708102108768035%' }}><a href="#" className="datatable-sorter">Salary</a></th></tr></thead><tbody><tr data-index={0}><td>Tiger Nixon</td><td>System Architect</td><td>Edinburgh</td><td>61</td><td>2011/04/25</td><td>$320,800</td></tr><tr data-index={1}><td>Garrett Winters</td><td>Accountant</td><td>Tokyo</td><td>63</td><td>2011/07/25</td><td>$170,750</td></tr><tr data-index={2}><td>Ashton Cox</td><td>Junior Technical Author</td><td>San Francisco</td><td>66</td><td>2009/01/12</td><td>$86,000</td></tr><tr data-index={3}><td>Cedric Kelly</td><td>Senior Javascript Developer</td><td>Edinburgh</td><td>22</td><td>2012/03/29</td><td>$433,060</td></tr><tr data-index={4}><td>Airi Satou</td><td>Accountant</td><td>Tokyo</td><td>33</td><td>2008/11/28</td><td>$162,700</td></tr><tr data-index={5}><td>Brielle Williamson</td><td>Integration Specialist</td><td>New York</td><td>61</td><td>2012/12/02</td><td>$372,000</td></tr><tr data-index={6}><td>Herrod Chandler</td><td>Sales Assistant</td><td>San Francisco</td><td>59</td><td>2012/08/06</td><td>$137,500</td></tr><tr data-index={7}><td>Rhona Davidson</td><td>Integration Specialist</td><td>Tokyo</td><td>55</td><td>2010/10/14</td><td>$327,900</td></tr><tr data-index={8}><td>Colleen Hurst</td><td>Javascript Developer</td><td>San Francisco</td><td>39</td><td>2009/09/15</td><td>$205,500</td></tr><tr data-index={9}><td>Sonya Frost</td><td>Software Engineer</td><td>Edinburgh</td><td>23</td><td>2008/12/13</td><td>$103,600</td></tr></tbody></table></div>
              </div>
            </div> */}
          </div>


        </div>
      </main>

    </div>
  )
}

export default DashBoard