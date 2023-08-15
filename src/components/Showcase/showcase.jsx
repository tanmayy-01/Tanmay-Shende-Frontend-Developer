import React, { useEffect, useState } from 'react'
import bgImageTiles from '../../assets/Hero/BgImage2.jpg'
import bgImageFilter from '../../assets/Hero/BgImage3.jpg'
import fetchCapsuleData from '../../services/LandingAPI/apis'

const Showcase = () => {

    const [CapsuleData, setCapsuleData] = useState([])
    const [status, setStatus] = useState('');
    const [type, setType] = useState('');
    const capsuleStatusOptions = ['active', 'retired', 'unknown'];
    const typeOptions = ['Dragon 1.0', 'Dragon 1.1', 'Dragon 2.0'];
    useEffect(() => {
        const fetchCapsules = async () => {
            const data = await fetchCapsuleData();
            const filteredResults = data.filter((capsule) => {
                return (
                    (status === '' || capsule.status === status) &&
                    (type === '' || capsule.type === type)
                );
            });
            setSearchResults(filteredResults);
        };
        fetchCapsules();
    }, [status, type])

    const [currentPage, setCurrentPage] = useState(1);
    const [searchResults, setSearchResults] = useState([]);
    const resultsPerPage = 3; // Number of results per page
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className={
                'w-full lg:h-56 bg-[#231F1C]  bg-no-repeat bg-cover bg-fixed z-50 text-white m-auto flex justify-center items-center md:h-56  sm:h-14'
            }
                style={{ backgroundImage: `url(${bgImageFilter})` }}
            >
                <div className='flex flex-col'>
                    <div className='text-center lg:text-5xl font-bold mb-4 md:text-3xl '> Filter Your Capsule </div>
                    <div className='flex flex-row'>
                        <div className='m-2 md:m-3 lg:m-5'>
                            <label className="block mb-2 lg:text-xl  text text-gray-900 dark:text-white">Capsule Type</label>
                            <select id="type" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={type} onChange={(e) => {
                                    setType(e.target.value)
                                }}
                            >
                                <option value="">All</option>
                                {typeOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='m-2 md:m-3 lg:m-5'>
                            <label className="block mb-2 lg:text-xl  text-gray-900 dark:text-white">Capsule Status</label>
                            <select id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={status} onChange={(e) => {
                                setStatus(e.target.value)
                            }}>
                                <option value="">All</option>
                                {capsuleStatusOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div >
            <div />
            < div className='w-full h-[240vh] lg:h-screen md:h-screen  bg-black text-white p-6'
            >
                <div className='w-full h-screen bg-no-repeat bg-cover' style={
                    {
                        backgroundImage: `url(${bgImageTiles})`
                    }}>
                    <div className="lg:p-10 p-2 md:p-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-20 p-10 sm:p-0 sm-0 md:p-0 " >
                        {currentResults.map((item, index) => {
                            return (
                                <div key={item.capsule_serial} className="rounded md:overflow-hidden shadow-lg border-solid border-2 border-gray-400 backdrop-blur-sm ">
                                    <img className="w-full h-56 " src={`/Capsules/cap${item.capsule_serial}.jpg`} alt="Sunset in the mountains" />
                                    <div className="px-1 py-1 md:p-2 lg:p-2">
                                        <p className="  lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">  {item.capsule_serial}</p>
                                    </div>
                                    <div className="px-1 pt-1 pb-1   sm:display-none  ">
                                        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2 sm:text-none   ">Status: {item.status} </span> */}
                                        <p className="mb-3 font-2 lg:font-5 font-normal      text:text-white">{item.details}</p>
                                        <p className="m-1 font-bold overline text:text-white"> Status: {item.status}</p>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2">Type: {item.type}</span>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        {searchResults.length > resultsPerPage && (
                            <div className="lg:w-full md:w-full w-full  bg-transparent p-4 flex flex-row items-center justify-center">
                                <div className="pagination flex flex-row justify-between items-center">
                                    {Array.from({ length: Math.ceil(searchResults.length / resultsPerPage) }).map((_, index) => (
                                        <div key={index} className="page-item m-1 lg:m-4
                                        bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 
                                        ">
                                            <button className="page-link" onClick={() => paginate(index + 1)}>
                                                {index + 1}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </ div >
            </div >
        </>
    )
}

export default Showcase