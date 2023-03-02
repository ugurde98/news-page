import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import './Body.css'
const Body = () => {
    return (
        <div>
            <div className='body-contaniner'>
                <div>

                    <img src='images/image-web-3-desktop.jpg' alt='jpg' className='image1' />
                    <div className='rowitem'>
                        <h1 className='big-text'>
                            The Bright Future of Web 3.0?
                        </h1>
                        <div className='mini-text'>
                            <p>
                                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                                But is it really fulfilling its promise?
                            </p>
                            <div className='button'>
                                READ MORE
                            </div>
                        </div>
                    </div>

                </div>
                <div className='news-container'>
                    news
                </div>

            </div>
            <div className='body-container-2'>
                <NewsCard />
                <NewsCard />
                <NewsCard />


            </div>

        </div>

    )
}

export default Body