// Dynamic route for individual blog pages 
import { useRouter } from 'next/router';

export default function BlogDetailPage({ blog }) {
    return (
        <div className="container mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.params;
    const res = await fetch(`${process.env.API_URL}/api/blogs/${id}`);
    const blog = await res.json();
    return { props: { blog } };
}
