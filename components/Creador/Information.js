
import Image from 'next/image'

import imageVariants from 'config/imageVariants';




export default function Information({ datos }) {

    const { standard } = imageVariants
    const { fantastic } = standard;

    return (
        <>

            <div className='m-personaje__header'>
                <div className="m-personaje__header--banner"></div>
                <div className="m-personaje__header--content">
                    <div className="o-container m-personaje__container">
                        <div className="m-personaje__image">
                            <Image
                                src={`${datos.thumbnail.path}/${fantastic.name}.${datos.thumbnail.extension}`}
                                alt=""
                                width={fantastic.sizes.width}
                                height={fantastic.sizes.height}
                                placeholder="blur"
                                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8egYAArwBw06rL9wAAAAASUVORK5CYII="
                                className='m-personaje__header--img'
                            />
                        </div>
                        <div className="m-personaje__information">
                            <h1 className='m-personaje__information--title'>{datos.firstName}</h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}