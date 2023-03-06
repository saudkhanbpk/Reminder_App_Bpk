import React, { useEffect, useState } from "react";
import "./GetUser.css";
import { Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { getUser } from "../../services/Auth/auth";
import { deleteUser } from "../../services/Auth/auth";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
export default function GetUser() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [fetchHandle, setFetchHandle] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  console.log("fata", data);
  useEffect(() => {
    userData();
  }, [fetchHandle]);
  const userData = () => {
    getUser()
      .then((res) => {
        console.log("welcom", res.users);
        setData(res.users);
      })
      .catch((err) => {
        console.log("welcom", err);
      });
  };
  const deleteUsers = (id) => {
    deleteUser({ _id: id })
      .then((res) => {
        console.log("welcom", res);
        setFetchHandle(!fetchHandle);
      })
      .catch((err) => {
        console.log("welcom", err);
      });
  };
  const lastPostIndex = currentPage * postsPerPage;

  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <div className="Users">
        <button
          className="Create"
          onClick={() => {
            navigate("/signUp");
          }}
        >
          Create User
        </button>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>UserId</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts?.map((item, index) => {
            console.log("item in map", item.name);
            return (
              <tr key={index}>
                <td>{firstPostIndex + index + 1}</td>
                <td>{item?.name}</td>
                <td>{item.email}</td>
                <td>{item._id}</td>
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
