import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="post"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="user"
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit" />
            </Link>
            <img src={Delete} alt="delete" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rem
          atque itaque
        </h1>
        <p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rem
            atque itaque aperiam blanditiis vero, facere voluptate placeat modi
            earum officiis, neque molestias magnam assumenda fugiat explicabo
            nam labore possimus.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rem
            atque itaque aperiam blanditiis vero, facere voluptate placeat modi
            earum officiis, neque molestias magnam assumenda fugiat explicabo
            nam labore possimus.
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
