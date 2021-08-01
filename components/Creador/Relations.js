
import Image from 'next/image'

import imageVariants from 'config/imageVariants';

import getRandomVariant from 'config/getRandomVariant';


export default function Relations({ comics, stories, series }) {

    const datosComics = getRandomVariant(comics.items, 10)
    const datosStories = getRandomVariant(stories.items, 5)
    const datosSeries = getRandomVariant(series.items, 5)


    return (
        <>

            <div className='m-personaje__relations'>
                <div className="m-personaje__relations--comics">
                    <div className="m-personaje__relations--title">Comics</div>
                    <div className="m-personaje__relations--datacomics">
                        {
                            datosComics && datosComics.map(datoComic => {
                                return (
                                    <>
                                        <span className='a-comic__name'>
                                            {datoComic.name}
                                        </span>
                                    </>
                                )
                            }

                            )
                        }
                    </div>
                </div>
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
                    <div className="m-personaje__relations--title">Series</div>
                    <div className="a-series__container">
                        {
                            datosSeries && datosSeries.map(datoSerie => {
                                return (
                                    <>
                                        <span className='a-series__data'>
                                            {datoSerie.name}
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