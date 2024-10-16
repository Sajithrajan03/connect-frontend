export default function Resources({ resourcesData = [] }) {
    return (
      <div >
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-2xl font-semibold text-gray-800">Project Resources</h4>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition-colors">
            Upload Resource
          </button>
        </div>
        <div className="border-t border-gray-300 mt-4 pt-4">
          <ul className="space-y-3">
            {resourcesData.length > 0 ? (
              resourcesData.map((resource, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 p-2 bg-slate-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-gray-700 font-medium">{resource}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-500">No resources available.</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
  