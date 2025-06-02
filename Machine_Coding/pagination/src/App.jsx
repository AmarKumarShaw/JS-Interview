import { useState } from 'react'
import './App.css'
import Pagination from './components/Pagination'

function App() {
   const mockData = [
      { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com" },
      { id: 2, name: "Bob Smith", email: "bob.smith@example.com" },
      { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com" },
      { id: 4, name: "Diana Prince", email: "diana.prince@example.com" },
      { id: 5, name: "Ethan Hunt", email: "ethan.hunt@example.com" },
      { id: 6, name: "Fiona Gallagher", email: "fiona.gallagher@example.com" },
      { id: 7, name: "George Bluth", email: "george.bluth@example.com" },
      { id: 8, name: "Hannah Montana", email: "hannah.montana@example.com" },
      { id: 9, name: "Ian Malcolm", email: "ian.malcolm@example.com" },
      { id: 10, name: "Jane Eyre", email: "jane.eyre@example.com" },
      { id: 11, name: "Kevin Hart", email: "kevin.hart@example.com" },
      { id: 12, name: "Laura Palmer", email: "laura.palmer@example.com" },
      { id: 13, name: "Michael Scott", email: "michael.scott@example.com" },
      { id: 14, name: "Nancy Wheeler", email: "nancy.wheeler@example.com" },
      { id: 15, name: "Oscar Martinez", email: "oscar.martinez@example.com" },
      { id: 16, name: "Pam Beesly", email: "pam.beesly@example.com" },
      {
        id: 17,
        name: "Quentin Coldwater",
        email: "quentin.coldwater@example.com",
      },
      { id: 18, name: "Rachel Green", email: "rachel.green@example.com" },
      { id: 19, name: "Steve Rogers", email: "steve.rogers@example.com" },
      { id: 20, name: "Tina Fey", email: "tina.fey@example.com" },
    ];

  return (
   <div>
    <Pagination mockData={mockData}/>
   </div>
  )
}

export default App
