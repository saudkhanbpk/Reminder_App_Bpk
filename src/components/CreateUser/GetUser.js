import React, { useEffect, useState } from "react";
import "./GetUser.css";
import { Table } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { AiFillDelete } from "react-icons/ai";
import { getUser } from "../../services/Auth/auth";
import { deleteUser } from "../../services/Auth/auth";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import { BsFileEarmarkCheckFill } from "react-icons/bs"
export default function GetUser() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [fetchHandle, setFetchHandle] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  useEffect(() => {
    userData();
  }, [fetchHandle]);
  const userData = () => {
    getUser()
      .then((res) => {
        setData(res.users);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteUsers = (id) => {
    deleteUser({ _id: id })
      .then((res) => {
        setFetchHandle(!fetchHandle);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const filterUsers = data.filter((user) => user.name.toLowerCase().includes(search.toLowerCase())
  );
  const lastPostIndex = currentPage * postsPerPage;

  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = filterUsers.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="container">
      <div className="Users">
        <button
          className="Create"
          onClick={() => {
            navigate("/signUp");
          }}
        >
          Create User
        </button>
        <Form.Control
          className="formsData"
          type="search"
          value={search}
          placeholder="Search"
          aria-label="Search"
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>UserId</th>
            <th>Assign File</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{firstPostIndex + index + 1}</td>
                <td>{item?.name}</td>
                <td>{item.email}</td>
                <td>{item._id}</td>
                <td>
                  <span className="fils" onClick={() => navigate(`/addFile/${item._id}`)}>
                    <BsFileEarmarkCheckFill />
                  </span>
                </td>
                <td>
                  <span
                    className="Delete"
                    onClick={() => {
                      deleteUsers(item._id);
                    }}
                  >
                    <AiFillDelete />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pagination
        totalPost={data.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}
