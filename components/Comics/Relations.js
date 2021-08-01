
import Image from 'next/image'

import imageVariants from 'config/imageVariants';

import getRandomVariant from 'config/getRandomVariant';


export default function Relations({ characters, stories }) {

    const datosCharacters = getRandomVariant(characters.items, 10)
    const datosStories = getRandomVariant(stories.items, 5)

    return (
        <>

            <div className='m-personaje__relations'>
                <div className="m-personaje__relations--stories">
                    <div className="m-personaje__relations--title">Stories</div>
                    <div className="a-stories__container">
                        {
                            datosStories && datosStories.map(datoStorie => {
                                return (
                                    <>
                                        <span className='a-stories__data'>
                                            {datoStorie.name}
                                        </span>
                                    </>
                                )
                            }

                            )
                        }
                    </div>
                </div>
                <div className="m-personaje__relations--series">
                    <div className="m-personaje__relations--title">Characters</div>
                    <div className="a-series__container">
                        {
                            datosCharacters && datosCharacters.map(datoPersonaje => {
                                return (
                                    <>
                                        <span className='a-series__data'>
                                            {datoPersonaje.name}
                                        </span>
                                    </>
                                )
                            }

                            )
                        }
                    </div>
                </div>
            </div>

        </>
    )
}