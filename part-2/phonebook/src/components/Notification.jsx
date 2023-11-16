const Notification = ({ message, errorMessage }) => {
    if (message !== null) {
        return (
            <div className='success'>
              {message}
            </div>
          )
    } else if (errorMessage !== null) {
        return (
            <div className='error'>
              {errorMessage}
            </div>
          )
    } else {
        return null
    }


  
    
}

export default Notification