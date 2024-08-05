import { MouseEvent, ReactNode } from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const Modal = ({
  isVisible,
  onClose,
  children
}: {
  isVisible: boolean
  onClose: () => void,
  children: ReactNode
}) => {
  if (!isVisible) return null

  const handleClickOutside = (e: MouseEvent) => {
    if ((e.target as Element).id === 'wrapper') {
      onClose()
    }
  }

  return (
    <div
      className='fixed inset-0 h-screen bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-[9999]'
      id='wrapper'
      onClick={handleClickOutside}
    >
      <div className='w-[600px] bg-white/85 rounded-md p-5'>
        <div className=''>
          <div className='flex justify-end'>
            <button onClick={() => onClose()}>
              <IoCloseOutline size={30} />
            </button>
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
