import { useRouter } from "next/router";

const ClientProjectsPage =() => {

    const router = useRouter()

    console.log(router.query);

    return (
        <div>
            Clients projects page
        </div>
    )
}

export default ClientProjectsPage;