import React, { Fragment, useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserList = () => {

  const [items, setItems]=useState([]);
  const clickData=(items)=>{
    // console.log(items)
    setItems(items);
  }



  const baseurl ="https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020";
  const [results, setResults] = useState([]);
  const getData = async () => {
    const response = await fetch(baseurl);
    const data = await response.json();
    setResults(data.results);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Fragment>
      <UserCard datas={items}/>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-3 gap-2">
        {results?.map((item) => (
        <div className="border bg-white pr-28 pl-2 shadow-md hover:bg-purple-700 hover:text-white"
        onClick={clickData.bind(this,item)}>
          <p className="text-gray-300">{item.gender}</p>
          <p className="text-xl font-bold">{item.name.title} {item.name.first} {item.name.last}</p>
          <p className="text-sm text-red-600 hover:text-white">{item.email}</p>
        </div>
      ))}
      </div>
      </div>
    </Fragment>
  );
};

export default UserList;
