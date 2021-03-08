import { useRouter } from 'next/router'

const BlogPostPage = () => {

    const router = useRouter()

    console.log(router.query);

    const [ first , second , last ] = router.query.params

    return (
        <div>Blog post: {first}/{second}/{last}</div>
    )
}

export default BlogPostPage;