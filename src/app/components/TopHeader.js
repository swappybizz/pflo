// src/app/components/TopHeader.js

const TopHeader = ({infoOrWork, setInfoOrWork}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-20 md:h-24 z-[1000] flex justify-between items-center bg-black bg-opacity-65 text-gray-300'>
      <div className='flex items-center m-2'>
        <span className='text-3xl md:text-4xl bg-white rounded-sm text-gray-700'>§</span>
        <div className='ml-2 md:ml-3'>
          <div className='text-base md:text-lg font-bold'>Swapnil </div>
          <div className='text-xs md:text-sm text-gray-400 hover:bg-white hover:text-black transition-all duration-75 ease-in-out'>
            Fullstack Developer<span className='text-green-600 animate-pulse'>|</span>
          </div>
        </div>
      </div>

      <div className='flex space-x-2 md:space-x-4 text-lg md:text-xl'>
        <button
          onClick={() => setInfoOrWork('info')}
          className={`text-gray-300 ${infoOrWork === 'info' ? 'text-green-500' : ''}`}
        >
          Info
          {
            // infoOrWork === 'info' && <span className='text-white animate-pulse text-2xl'>|</span>
          }
        </button>
        <button
          onClick={() => setInfoOrWork('work')}
          className={`text-gray-300 ${infoOrWork === 'work' ? 'text-green-500' : ''}`}
        >
          Work
          {
            // infoOrWork === 'work' && <span className='text-white animate-pulse text-2xl'>|</span>
          }
        </button>
      </div>

      <div className='flex space-x-2 md:space-x-4 mr-2 md:mr-4'>
        <a href='mailto:swapnil@nooffice.no' className='text-gray-300 hover:text-white text-sm md:text-base'>Email</a>
        <a href='tel:+4740565790' className='text-gray-300 hover:text-white text-sm md:text-base'>Phone</a>
      </div>
    </div>
  );
};

export default TopHeader;
