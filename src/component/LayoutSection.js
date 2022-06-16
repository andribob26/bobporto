import React from 'react'

export const LayoutSection = ({id, children}) => {
    // console.log('jalan componenet layout Secrtion')
    return (
        <section id={id} className='min-h-screen'>
            {children}
        </section>
    )
}

export default LayoutSection
