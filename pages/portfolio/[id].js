import { useRouter } from 'next/router'

const PortfolioIdPage = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>
            Portfolio id: {id}
        </div>
    )
}

export default PortfolioIdPage;