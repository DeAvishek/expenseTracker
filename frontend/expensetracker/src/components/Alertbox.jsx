import React from 'react'

const Alertbox = ({ setmessage,loading,setalertstaus}) => {
    return (
        <div>
            {!loading && <div className={`alert alert-${setalertstaus}`} role="alert">
                {setmessage}
            </div>}
        </div>
    )
}

export default Alertbox
