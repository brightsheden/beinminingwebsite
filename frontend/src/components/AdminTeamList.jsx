import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTeam } from '../state/Actions';

function AdminTeamListScreen({ teams }) {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteTeam(id));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          {/* Table Headers */}
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {teams.map((team) => (
              <tr key={team.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{team.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{team.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"> <img className='h-[50px]' src={team.image} /></td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <Link
                    to={`/admin/editteam/${team.id}/`}
                    className="text-indigo-600 hover:text-indigo-900 mr-2"
                  >
                    Edit
                  </Link>
                  <button onClick={() => onDelete(team.id)} className="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminTeamListScreen;
