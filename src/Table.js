import React, { useState } from 'react'

const Table = (props) => {

    let { data } = props;
    let [fdata, setFdata] = useState(data)

    const handlepersonData = (e) => {
        console.log(e.target.innerText);

        let sfilterData = data.filter((s) => {
            if (s.name.includes(e.target.innerText)) {
                return true;
            } else {
                return false;
            }

        });
        setFdata(sfilterData)
    }

    return (
        <div>
            <table className="border-separate border-spacing-2 border border-slate-400 mx-auto my-10">
                <thead>
                    <tr>
                        <th className="border border-slate-300 p-3">Student Id</th>
                        <th className="border border-slate-300 p-3">Student Name</th>
                        <th className="border border-slate-300 p-3">English</th>
                        <th className="border border-slate-300 p-3">Telugu</th>
                        <th className="border border-slate-300 p-3">maths</th>
                        <th className="border border-slate-300 p-3">Science</th>
                        <th className="border border-slate-300 p-3">Social</th>
                    </tr>
                </thead>
                <tbody>
                    {fdata.map((sdata) => {
                        return <tr key={sdata.id} >
                            <td className="border border-slate-300 p-2 text-center">{sdata.id}</td>
                            <td className="border border-slate-300 p-2 " onClick={handlepersonData}>{sdata.name}  </td>
                            <td className="border border-slate-300 p-2 text-center">{sdata.english}</td>
                            <td className="border border-slate-300 p-2 text-center">{sdata.telugu}</td>
                            <td className="border border-slate-300 p-2 text-center">{sdata.maths}</td>
                            <td className="border border-slate-300 p-2 text-center">{sdata.Science}</td>
                            <td className="border border-slate-300 p-2 text-center">{sdata.social}</td>

                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default Table