import React from "react";
import { Link } from "react-router-dom";

export default function Categories(props) {
  return (
    <div>
      {props.categories.map(category => (
        <React.Fragment key={category.id}>
          <Link to={`/categories/${category.id}`}>{category.title}</Link>
        </React.Fragment>
      ))}
    </div>
  );
}
