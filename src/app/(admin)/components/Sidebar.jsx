import React from 'react';

export default function Sidebar() {
  return (
    <aside style={{ width: '220px', background: '#222', color: '#fff', padding: '2rem 1rem' }}>
      <h2>Admin Panel</h2>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="/admin/dashboard" style={{ color: '#fff' }}>Dashboard</a></li>
          <li><a href="/admin/products" style={{ color: '#fff' }}>Products</a></li>
          <li><a href="/admin/orders" style={{ color: '#fff' }}>Orders</a></li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </aside>
  );
}