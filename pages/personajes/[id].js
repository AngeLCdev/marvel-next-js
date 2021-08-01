import Personaje from 'components/Personaje'
import getHashParam from 'services/getHashParam'

export default function DetallePersonaje(props) {
    const { id, data } = props
    return (
        <>
            <Personaje datos={data} />
        </>
    )
}

export async function getServerSideProps(context) {
    const { params } = context
    const { id } = params

    const search = `characters/${id}`;

    const url = getHashParam({ search })

    return fetch(url).
        then(res => res.json()).
        then(data => {
            const props = {
                id,
                data: data.data
            }
            return {
                props
            }
        });
}
