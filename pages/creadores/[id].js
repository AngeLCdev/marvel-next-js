import Creador from 'components/Creador'
import getHashParam from 'services/getHashParam'

export default function DetallePersonaje(props) {
    const { id, data } = props

    return (
        <>
            <Creador datos={data} />
        </>
    )
}

export async function getServerSideProps(context) {
    const { params } = context
    const { id } = params

    const search = `creators/${id}`;

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
