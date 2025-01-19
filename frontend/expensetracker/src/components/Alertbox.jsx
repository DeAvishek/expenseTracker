import React from 'react'

const Alertbox = ({ message,loading,status}) => {
    return (
        <div>
            {!loading && <div className={`alert alert-${status}`} role="alert">
                {message}
            </div>}
        </div>
    )
}

export default Alertbox
