import React from 'react'
import Sidebar from '../components/Sidebar'

function Home() {
    return (
        <div className="flex">
            {/* Left side */}
            <Sidebar />

            {/* `Right side */}
            <div>
                <h1>Right</h1>
            </div>
        </div>
    )
}

export default Home