export default function PropertyDetailsPage({ params }) {
    const { id } = params;
    // Fetch property data based on ID or use mock data
  
    return (
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold">Property Details - {id}</h1>
        {/* Property details content */}
      </div>
    );
  }
  