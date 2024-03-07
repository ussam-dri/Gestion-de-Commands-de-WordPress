import React, { useState, useEffect } from 'react';
import api from '../../api/Config';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    api.get('/clients')
      .then(response => {
        setClients(response.data);
      })
      .catch(error => {
        console.error('Error fetching clients:', error);
      });
  }, []);

  return (
    <div>
      <h2>Clients</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Phone Number</th>
            <th>Adresse</th>
            <th>Confirmation</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.full_name}</td>
              <td>{client.number}</td>
              <td>{client.adresse}</td>
              <td>{client.confirmed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
