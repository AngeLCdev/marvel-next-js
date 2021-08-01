import Image from 'next/image'
import Link from 'next/link'
import imageVariants from 'config/imageVariants';



export default function List({ images }) {

    const { portrait } = imageVariants
    const { uncanny } = portrait;
    return (
        <>
            <h2 className="m-home__title">Personajes</h2>
            <div className='m-home__imagesContainer'>
                {
                    images && images.map(img => (
                        <div className='m-home__image' key={img.id}>
                            <Link href={`personajes/[id]`} as={`personajes/${img.id}`}>
                                <a>
                                    <Image
                                        src={`${img.thumbnail.path}/${uncanny.name}.${img.thumbnail.extension}`}
                                        alt=""
                                        width={uncanny.sizes.width}
                                        height={uncanny.sizes.height}
                                        placeholder="blur"
                                        blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8egYAArwBw06rL9wAAAAASUVORK5CYII="
                                    />
                                    <h3>{img.name}</h3>
                                </a>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    )
}