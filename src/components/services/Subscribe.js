import './Subscibe.css'
const Subscribe =()=>{
    return(
        <div className='subcribe_container'>
            <div>
                <h3>LET'S BE FRIENDS!</h3>
                <p>Nisi nisi tempor consequat laboris nisi</p>
            </div>
            <div className='subcribe_input_field'>
                <input type='text' placeholder='Enter your email address' />
                <button type='button'>Subscribe</button>
            </div>
        </div>
    )
}
export default Subscribe;