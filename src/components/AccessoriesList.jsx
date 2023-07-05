const AccessoriesList = ({ accessories }) => {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {accessories.map((accessory) => (
        <li
          key={accessory.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <img
            src={accessory.photo}
            alt={accessory.name}
            style={{ width: "50px", height: "50px", marginRight: "10px" }}
          />
          <span>{accessory.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default AccessoriesList;
