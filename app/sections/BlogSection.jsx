// // export default function BlogSection() {
// //     return (
// //       <section id="blog" className="py-20 bg-gray-100">
// //         <div className="container mx-auto px-6 text-center">
// //           <h2 className="text-3xl font-semibold text-gray-800">Latest Articles</h2>
// //           <p className="mt-4 text-gray-600">
// //             Stay updated with our latest news and articles.
// //           </p>
// //           {/* Blog posts grid goes here */}
// //         </div>
// //       </section>
// //     );
// //   }
  



// import Link from 'next/link';

// export default function BlogSection({ blogs }) {
//     return (
//         <section className="container mx-auto px-6 py-20">
//             <h2 className="text-3xl font-bold text-center mb-8">Our Blog</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {blogs.map(blog => (
//                     <div key={blog._id} className="bg-white p-6 rounded-lg shadow-lg">
//                         <h3 className="text-2xl font-bold mb-4">{blog.title}</h3>
//                         <p className="text-gray-700">{blog.content.slice(0, 100)}...</p>
//                         <Link href={`/blog/${blog._id}`} className="text-orange-500 font-semibold hover:underline">Read More...</Link>
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-8 flex justify-center">
//                 <Link href="/blog" className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
//                     View All Blogs
//                 </Link>
//             </div>
//         </section>
//     );
// }




// import Link from 'next/link';

// export default function BlogSection({ blogs = [] }) {
//     if (!blogs || blogs.length === 0) {
//         return <p className="text-center text-gray-600">No blogs available at the moment.</p>;
//     }

//     return (
//         <section className="container mx-auto px-6 py-20">
//             <h2 className="text-3xl font-bold text-center mb-8">Our Blog</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {blogs.map(blog => (
//                     <div key={blog._id} className="bg-white p-6 rounded-lg shadow-lg">
//                         <h3 className="text-2xl font-bold mb-4">{blog.title}</h3>
//                         <p className="text-gray-700">{blog.content.slice(0, 100)}...</p>
//                         <Link href={`/blog/${blog._id}`} className="text-orange-500 font-semibold hover:underline">Read More...</Link>
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-8 flex justify-center">
//                 <Link href="/blog" className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
//                     View All Blogs
//                 </Link>
//             </div>
//         </section>
//     );
// }


import Link from 'next/link';

export default function BlogSection({ blogs = [] }) {
    if (!blogs || blogs.length === 0) {
        return <p className="text-center text-gray-600">No blogs available at the moment.</p>;
    }

    return (
        <section className="container mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold text-center mb-8">Our Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map(blog => (
                    <div key={blog._id} className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">{blog.title}</h3>
                        <p className="text-gray-700">{blog.content.slice(0, 100)}...</p>
                        <Link href={`/blog/${blog._id}`} className="text-orange-500 font-semibold hover:underline">Read More...</Link>
                    </div>
                ))}
            </div>
            <div className="mt-8 flex justify-center">
                <Link href="/blog" className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
                    View All Blogs
                </Link>
            </div>
        </section>
    );
}
