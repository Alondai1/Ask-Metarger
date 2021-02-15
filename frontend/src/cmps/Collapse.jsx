import React from 'react'

export default function Collapse({ children, isShow }) {
    return (
        <>
            {
                isShow && <div className="collapse bounce-top">
                    {children}
                </div>
            }
        </>
    )
}
