import Comic from 'components/Comics'
import getHashParam from 'services/getHashParam'

export default function DetallePersonaje(props) {
    const { id, data } = props

    console.log(props);
    return (
        <>
            <Comic datos={data} />
        </>
    )
}

export async function getServerSideProps(context) {
    const { params } = context
    const { id } = params

    const search = `comics/${id}`;

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
