import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./App.css"



const App = () => {
  const [arr, setArr] = useState()
  
  const getData = async() => {
    try {
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
      setArr(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData()
  },[])


  console.log(arr)
  return (
    <>
    <div>
      <input type="text"/>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>
            name
            </th>
            <th>
            username
            </th>
            <th>
            address
            </th>
            <th>
            phone
            </th>
            <th>
            website
            </th>
            <th>
            company
            </th>
          </tr>
        </thead>
        <tbody>

          {
            arr?.map((e,i)=>(
              <tr>
                <td>
                  {e.name}
                </td>
                <td>
                  {e.username}
                </td>
                <td>
                  {e.address.city}
                </td>
                <td>
                  {e.phone}
                </td>
                <td>
                  {e.website}
                </td>
                <td>
                  {e.company.name}
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
    </>
  )
}

export default App