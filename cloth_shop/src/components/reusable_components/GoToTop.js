import React from 'react'

function GoToTop() {
    return (
        <div>
            <button onClick={() => window.scrollTo(0, 0)} className="fixed bottom-0 right-0 m-5 bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded-lg">
                <i class="fas fa-arrow-up"></i>
            </button>
        </div>
    )
}

export default GoToTop