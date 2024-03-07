import React, { useState, useEffect } from 'react';
import api from '../../api/Config';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Commands = () => {
  const [commands, setCommands] = useState([]);

  useEffect(() => {
    api.get('/commands')
      .then(response => {
        setCommands(response.data);
      })
      .catch(error => {
        console.error('Error fetching commands:', error);
      });
  }, []);

  return (
    <div>
      <h2>Commands</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Client ID</th>
            <th>Product</th>
            <th>Confirmation</th>
            <th>Deliverd</th>
            
          </tr>
        </thead>
        <tbody>
          {commands.map(command => (
            <tr key={command.id_comm}>
              <td>{command.id_comm}</td>
              <td>{command.client_id}</td>
              <td>{command.product}</td>
              <td>{command.confirmed}</td>
              <td>{command.livraison}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
