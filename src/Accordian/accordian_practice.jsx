import React from "react";

const list_data = [
  { id: 1, name: "Parent1", parentId: null },
  { id: 1.1, name: "child1", parentId: 1 },
  { id: 1.2, name: " child2", parentId: 1 },
  { id: 2, name: "Parent2", parentId: null },
  { id: 3, name: "Parent3", parentId: null },
  { id: 3.1, name: "child1", parentId: 3 },
  { id: 3.2, name: " child2", parentId: 3 },
  { id: 3.3, name: "child1", parentId: 3 },
  { id: 3.4, name: " child2", parentId: 3 },
];

//function will return the the children
const getChildren = (parentId, list) => {
  return list.filter((l) => l.parentId === parentId);
};
export default function AccordianPractice() {
  console.log("hello");
  const Item = getChildren(null, list_data);
  return <div className="App">{Item}</div>;
}
