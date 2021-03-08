import { useRouter } from 'next/router'

const SelectedClienteProjectPage = () => {

    const router = useRouter()

    console.log(router.query);

    return (
        <div>
            <h1>Project page for a cliente selected</h1>
        </div>
    )
}

export default SelectedClienteProjectPage;