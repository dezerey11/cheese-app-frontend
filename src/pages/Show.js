import { useState } from "react";

function Show(props) {
  const id = props.match.params.id;
  const cheeses = props.cheese;
  const cheese = cheeses.find((c) => {
    return c._id === id;
  });

  // set state for form
  const [editForm, setEditForm] = useState(cheese);

  // Change function for form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  // Submit for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateCheese(editForm, cheese._id);
    props.history.push("/");
  };

  const removeCheese = () => {
    props.deleteCheese(cheese._id);
    props.history.push("/");
  };

  return (
    <div className="cheese">
      <h1>{cheese.name}</h1>
      <h2>{cheese.countryOfOrigin}</h2>
      <img src={cheese.image} alt={cheese.name} />
      <button id="delete" onClick={removeCheese}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="Country of Origin"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="Image"
          onChange={handleChange}
        />
        <input type="submit" value="Update Cheese" />
      </form>
    </div>
  );
}

export default Show;
