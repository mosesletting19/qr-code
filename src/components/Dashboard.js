import React, { useState } from 'react';
import Table from './Table';

const Dashboard = () => {
    const [data] = useState([
        { name: 'John Doe', email: 'john.doe@example.com', status: 'Not Sent' },
        { name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Not Sent' },
    ]);

    return (
        <div>
            <h1>Dashboard</h1>
            <Table data={data} />
        </div>
    );
};

export default Dashboard;
