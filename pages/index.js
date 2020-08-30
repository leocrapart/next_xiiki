import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Result from '../components/result'
import MCTForm from '../components/MctForm'

import dayjs from 'dayjs'

export async function getStaticProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
    console.log(baseUrl) 
    //const res = await fetch("http://localhost:3000/api/daily")
    const res = await fetch('https://next_xiiki.vercel.app/api/daily')
    const json = await res.json()
    return {
      props: {
        data: json,
        baseUrl: baseUrl
      }
    }
}

const Home = ({ data, baseUrl }) => {
    const [results, setResults] = useState(data);   

    const onChange = (e) => {
    } 
  
    const getDataForPreviousDay = async () => {
      let currentDate = dayjs(results.date);
      let previousDayDate = currentDate.subtract(1, 'day').format('YYYY-MM-DDTHH:mm:ss')
      const res = await fetch('https://next_xiiki.vercel.app/api/daily?date=' + previousDayDate)
      const json = await res.json()
  
      setResults(json);
    }
  
    const getDataForNextDay = async () => {
      let currentDate = dayjs(results.date);
      let nextDayDate = currentDate.add(1, 'day').format('YYYY-MM-DDTHH:mm:ss')
      const res = await fetch('https://next_xiiki.vercel.app/api/daily?date=' + nextDayDate)
      const json = await res.json()
  
      setResults(json);
    }

    const updateMacros = async () => {
        console.log("saving dude!!!!");
        console.log("results =>", results);
        const res = await fetch('https://next_xiiki.vercel.app/api/daily', {
          method: 'post',
          body: JSON.stringify(results)
        })
      }
    
    return (
    <div>
      <div>{baseUrl==""?"empty baseUrl" : baseUrl}</div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex text-center">
        <div className="w-1/3 p-4 bg-gray-200"><button onClick={getDataForPreviousDay}>Previous Day</button></div>
        <div className="w-1/3 p-4">{dayjs(results.date).format('MM/DD/YYYY')}</div>
        <div className="w-1/3 p-4 bg-gray-200"><button onClick={getDataForNextDay}>Next Day</button></div>
      </div>
  
      <div className="container mx-auto">
  
        <div className="flex text-center">
          <div className="w-full m-4">
            <h1 className="text-4xl">Macro Compliance Tracker</h1>
          </div>
        </div>
  
        <div className="flex text-center">
          <div className="w-1/3 p-4 bg-gray-200">Previous Day</div>
          <div className="w-1/3 p-4">1/23/2020</div>
          <div className="w-1/3 p-4 bg-gray-200">Next Day</div>
        </div>
  
        <div className="flex mb-4 text-center">
          <Result results={results.calories} />
          <Result results={results.carbs} />
          <Result results={results.fat} />
          <Result results={results.protein} />
        </div>
  
        <div className="flex">
          <MCTForm data={results} item="Total" onChange={onChange} />
          <MCTForm data={results} item="Target" onChange={onChange} />
          <MCTForm data={results} item="Variant" onChange={onChange} />
        </div>
  
        <div className="flex text-center">
        <div className="w-full m-4">
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={updateMacros}>
              Save this!
          </button>
        </div>
      </div>
      </div>
    </div>
  )}
  
  export default Home