import React, { useEffect, useState } from 'react'

const Languages = ({ languagesData }) => {

    const [dataLang, setDataLang] = useState([])


    useEffect(() => {
        for (const key in languagesData.data) {
            setDataLang((dataLang) => [
                ...dataLang,
                { name: key, percent: (languagesData.data[key] / languagesData.total) * 100 }
            ])
        }
    }, [])

    return (
        <div className="flex flex-wrap">
            {
                dataLang.map((item, index) => {
                    return (<p key={index} className="text-sm  mr-2">{item.name} : <span className="text-zinc-600">{item.percent.toFixed(2) + "%"}</span></p>)
                })
            }
        </div>
    )
}

export default Languages