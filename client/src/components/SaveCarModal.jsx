import { useNavigate } from "react-router-dom";

function SaveCarModal({ isOpen, onClose }) {

    const navigate = useNavigate();

    function handleCreateAccount() {
        navigate('/signup')
    }

    function handleClose() {
        onClose();
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-10 flex items-center justify-center z-50">

            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl">
                <h2 className="text-xl font-bold mb-2"> Want to save this car? </h2>
                <p className="text-gray-600 mb-6"> Create a free account to save this car to your garage and track it over time</p>


                <div className="flex gap-4">
                    <button
                        onClick={handleCreateAccount}
                        className="bg-blue-600 text-white py-2 px-4 rounded">
                        Create Account
                    </button>
                    <button
                        onClick={handleClose}
                        className="border border-gray-300 py-2 px-4 rounded">
                        Maybe Later?
                    </button>
                </div>
            </div>

        </div>
    )

}

export default SaveCarModal;