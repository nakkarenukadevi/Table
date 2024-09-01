import React, { useRef, useState } from 'react'

const Table = (props) => {

    let { data } = props;

    let [fdata, setFdata] = useState(data);

    let [filterConfig, setFilterConfig] = useState({});


    let myelement = useRef(null)

    const handleData = (e) => {
        e.preventDefault();
        if (e.target.value == "") {
            setFilterConfig((prevState) => {
                let { [e.target.name]: _, ...newObject } = prevState;
                return newObject
            })
        } else {
            setFilterConfig(prveState => ({ ...prveState, [e.target.name]: e.target.value }))
        }



    }
    const handlefrom = () => {
        let filterdata = data.filter((data) => {

            let newFilterConfig = Object.entries(filterConfig);

            return newFilterConfig.every(([key, value]) => {
                return data[key] === value;

            })


        });

        setFdata(filterdata)
    }

    const showfilterdiv = () => {
        const element = myelement.current;

        if (element.classList.contains('showSearch')) {
            element.classList.toggle('active');
        }

    }

    const handleSort = () => {
        let data2 = [...fdata];
        data2.sort((a, b) => a.name.localeCompare(b.name));
        setFdata(data2)
    }
    return (
        <div className='flex justify-center '>
            <div onClick={showfilterdiv} className='my-10 mx-10'>    Filter</div>
            <div class="my-10 border-2 border-slate-300 showSearch" ref={myelement} >

                <table className='mt-10' >

                    <tr className=' flex justify-between'>
                        <div>Name</div>
                        <div> <td className=''><input type="text" value={fdata.name} className=' border-2 border-slate-400' name='name' onChange={(e) => { handleData(e) }} /></td></div>
                    </tr>
                    <tr className=' flex justify-between'>
                        <div> City</div>
                        <div> <td className=''><input type="text" value={fdata.city} className=' border-2 border-slate-400' name="city" onChange={(e) => { handleData(e) }} /></td></div>
                    </tr>
                    <tr className=' flex justify-between'>
                        <div>Work</div>
                        <div> <td className=''><input type="text" value={fdata.work} className=' border-2 border-slate-400' name="work" onChange={(e) => { handleData(e) }} /></td></div>
                    </tr>
                    <tr className=' flex justify-between'>
                        <div> Salary</div>
                        <div> <td className=''><input type="number" value={fdata.salary} className=' border-2 border-slate-400' name="salary" onChange={(e) => { handleData(e) }} /></td></div>
                    </tr>
                    <tr className=' flex justify-between'>
                        <div> address</div>
                        <div><td className=''><input type="text" value={fdata.address} className=' border-2 border-slate-400' name="address" onChange={(e) => { handleData(e) }} /></td></div>
                    </tr>
                    <button onClick={handlefrom} className='my-3 bg-blue-600 text-white border-2  p-3'>clickMe</button>
                </table>



            </div>
            <div>
                <table className="border border-slate-300  my-10">
                    <thead>
                        <tr className="border-b border-gray-300" >
                            <th className=" p-4">Id</th>
                            <th className=" p-4" onClick={handleSort}>Name</th>
                            <th className=" p-4">City</th>
                            <th className=" p-4">work</th>
                            <th className=" p-4">salary</th>
                            <th className=" p-4">address</th>

                        </tr>
                    </thead>
                    <tbody>
                        {fdata.map((sdata) => {
                            return <tr key={sdata.id} className="border-b border-gray-300" >
                                <td className=" p-4 text-center">{sdata.id}</td>
                                <td className=" p-4 ">{sdata.name}  </td>
                                <td className=" p-4 text-center">{sdata.city}</td>
                                <td className=" p-4 text-center">{sdata.work}</td>
                                <td className=" p-4 text-center">{sdata.salary}</td>
                                <td className=" p-4 text-center">{sdata.address}</td>


                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table