import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from '../../component/element';

const data = [
  {
    key: '1',
    id: '1',
    title: 'John Brown',
    author: 32,
    categories: 'New York No. 1 Lake Park',
    date: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    id: '2',
    title: 'John Brown wwrwe',
    author: 3234,
    categories: 'New York No43345rk',
    date: 'New YorkfddfLake Park',
  },
];

function ListBlogs() {
  const [dataBlogs, setDataBlogs] = useState(data);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      render: (title, record) => <Link to={'/admin/blogs/' + record.id}>{title}</Link>,
    },
    {
      title: 'Author',
      dataIndex: 'author',
    },
    {
      title: 'Categories',
      dataIndex: 'categories',
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (action, record) => {
        return (
          <>
            <Link to={'/admin/blogs/' + record.id}>
              <Button title="Edit" class={'mr-10'} type="primary" />
            </Link>
            <Button title="Delete" onClick={() => handleDelete(record.id)} />
          </>
        );
      },
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  const handleDelete = (id) => {
    let newDataBlogs = dataBlogs.filter((item) => {
      return item.id !== id;
    });
    setDataBlogs(newDataBlogs);
  };

  return <Table type={'checkbox'} rowSelection={rowSelection} columns={columns} data={dataBlogs} />;
}

export default ListBlogs;
