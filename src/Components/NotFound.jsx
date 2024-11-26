import error from '../assets/finalProject assets/error.svg'

function NotFound() {
    return ( 

        <div className='text-green-600 py-5 text-center'>
            <p>Not Found</p>
            <img src={error} alt="Notfound" className='m-auto' />
        </div>
     );
}

export default NotFound;