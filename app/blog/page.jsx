// // import BlogSection from '../sections/BlogSection';

// // export default function BlogPage() {
// //   return <BlogSection />;
// // }

// import BlogSection from '../sections/BlogSection';

// export default function BlogPage({ blogs }) {
//     return (
//         <div>
//             <BlogSection blogs={blogs} />
//         </div>
//     );
// }

// export async function getServerSideProps() {
//     const res = await fetch(`${process.env.API_URL}/api/blogs`);
//     const blogs = await res.json();
//     return { props: { blogs } };
// }


//  // import BlogSection from '../sections/BlogSection';
// //app/page: Fetch data directly within the component


// import BlogSection from "../sections/BlogSection";

// export default async function BlogPage() {
//     const res = await fetch(`${process.env.API_URL}/api/blogs`);
//     const blogs = await res.json();

//     return (
//         <div>
//             <BlogSection blogs={blogs} />
//         </div>
//     );
// }


// app/blog/page.js
import BlogSection from '../sections/BlogSection';

export default async function BlogPage() {
    try {
        const res = await fetch(`${process.env.API_URL}/api/blogs`, {
            method: 'GET',
            cache: 'no-store', // Ensure fresh data if needed
        });
        if (!res.ok) {
            throw new Error('Failed to fetch blogs');
        }
        const blogs = await res.json();

        return (
            <div>
                <BlogSection blogs={blogs} />
            </div>
        );
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return <p className="text-center text-gray-600">Error loading blogs.</p>;
    }
}
