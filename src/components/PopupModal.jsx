import React from 'react'

const PopupModal = ({ onClose = () => { } }) => {
  return (
    <div>
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md">
                <h2 className="text-xl font-bold mb-4">Popup Modal</h2>
                <p>This is a simple popup modal.</p>
                <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md cursor-pointer hover:bg-gray-700">Close</button>
            </div>
        </div>
    </div>
  )
}

export default PopupModal
