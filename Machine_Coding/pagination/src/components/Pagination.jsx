import { useEffect, useState } from "react";

const Pagination = ({mockData}) => {
 
  const [paginatedData, setPaginatedData] = useState([]);
  const itemsPerPage = 5;
  const totalItems = mockData.length;
  const paginatedButton = totalItems / itemsPerPage;
  const handlePaginate = (currentPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginateData = mockData.slice(startIndex, endIndex);
    setPaginatedData(paginateData);
  };
  useEffect(() => {
    handlePaginate(1);
  }, []);

  return (
    <div>
      <h1>Pagination</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((data) => {
            return (
              <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {Array(paginatedButton)
        .fill("")
        .map((data, index) => {
          return (
            <button onClick={() => handlePaginate(index + 1)}>
              {index + 1}
            </button>
          );
        })}
    </div>
  );
};
export default Pagination;
