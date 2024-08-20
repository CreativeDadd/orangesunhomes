export default function DealPage({ params }) {
    const { id } = params;
    // Fetch deal data based on ID or use mock data
  
    return (
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold">Deal - {id}</h1>
        {/* Deal content */}
      </div>
    );
  }
  