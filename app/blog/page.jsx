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



import BlogSection from "../sections/BlogSection";

// Fetch data directly within the component
export default async function BlogPage() {
    const res = await fetch(`${process.env.API_URL}/api/blogs`);
    const blogs = await res.json();

    return (
        <div>
            <BlogSection blogs={blogs} />
        </div>
    );
}
