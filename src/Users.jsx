function Users({ customer }) {
  return (
    <div className="card">
        <p><b>Name:</b> <span className="inside">{customer.name}</span></p>
        <p><b>Age:</b> <span className="inside">{customer.age}</span></p>
        <p><b>Hobby:</b> <span className="inside">{customer.hobby}</span></p>
    </div>
  );
}

export default Users;
