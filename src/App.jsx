import React, { useState } from 'react'

const App = () => {

    const [count, setCount] = useState(0);

    function Increase() {
        setCount(count + 1)
    }
    function Decrease() {
        setCount(count - 1)
    }
    function Reset() {
        setCount(0)
    }
    return (
        <div className='flex items-center justify-center h-screen gap-2'>
            <div className='flex'>
                <button
                    className='border-2 p-2 cursor-pointer rounded-2xl bg-emerald-300'>
                    {count}
                </button>
            </div>
            <button
                className='border-2 p-2 cursor-pointer rounded-2xl bg-amber-800'
                onClick={Increase}
            >
                Increase
            </button>

            <button
                className='border-2 p-2 cursor-pointer rounded-2xl bg-amber-400'
                onClick={Decrease}
            >
                Decrease
            </button>

            <button
                className='border-2 p-2 cursor-pointer rounded-2xl bg-amber-200'
                onClick={Reset}
            >
                Reset
            </button>

        </div>
    )
}

export default App
