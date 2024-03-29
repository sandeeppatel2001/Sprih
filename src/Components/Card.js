export default function App({ user }) {
  return (
    <div className="Card">
      <div className="ImageCont">
        <div className="Img">
          <img alt=" .....Refresh" src={`${user.imageUrl}`} />
        </div>
        <div className="Designation">{user.designation}</div>
      </div>
      <div className="Details">
        <span className="Name">
          {user.firstName} {user.lastName}
        </span>
        <div className="leftDetails">
          <div className="detail-item">
            <span className="detail-label">Age</span> -{" "}
            <span className="detail-value">{user.age}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Email</span> -{" "}
            <span className="detail-value">{user.email}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Contact</span> -{" "}
            <span className="detail-value">{user.contactNumber}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">DOB</span> -{" "}
            <span className="detail-value">{user.dob}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Address</span> -{" "}
            <span className="detail-value">{user.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
