import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"

function Opening() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div data-aos-once="true" data-aos="fade">

            <div className='Op-background'></div>

            <div className='Opening'>
                <div className='Op-button'>
                    <Link style={{ textDecoration: 'None', color: 'black' }} to={"/main"}>
                        <Button >
                            Jugaras?
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Opening