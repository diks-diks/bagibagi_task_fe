import { Container, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";

const ListTransaction = ({ order, userData, tripData }) => {
  const navigate = useNavigate();
  return (
    <main
      style={{ backgroundColor: "#E5E5E5", marginTop: 100, marginBottom: 54 }}
      className="py-5 position-relative"
    >
      <Container>
        <h1>Incoming Transaction</h1>
        <Table striped className="bg-light mt-4">
          <thead>
            <tr>
              <th className="py-3 text-center">Id Trx</th>
              <th className="py-3 text-center">Users</th>
              <th className="py-3 text-center">Trip</th>
              <th className="py-3 text-center">Bukti Transfer</th>
              <th className="py-3 text-center">Status Payment</th>
              <th className="py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {order.map((ordr) => {
              return (
                <tr>
                  <td>{ordr.orderId.toUpperCase()}</td>
                  <td>
                    {
                      userData?.filter((user) => {
                        return user.userId === ordr.userId;
                      })[0].fullname
                    }
                  </td>
                  <td>
                    {
                      tripData?.filter((trip) => {
                        return trip.tripId === ordr.tripId;
                      })[0].title
                    }
                  </td>
                  <td className="text-center">
                    {ordr.img ? (
                      <Link to={ordr.img} target="_blank">
                        {ordr.img.slice(5)}
                      </Link>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td
                    className={`text-center fw-bold 
                    ${ordr.status === "new" && "text-secondary"}
                    ${ordr.status === "pending" && "text-warning"}
                    ${ordr.status === "approve" && "text-success"}
                    ${ordr.status === "cancel" && "text-danger"}
                    `}
                  >
                    {ordr.status.toUpperCase()}
                  </td>
                  <td className="text-center">
                    <HiMagnifyingGlassCircle
                      className="fs-2 text-primary"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/aprovement/${ordr.orderId}`);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
            {/* <tr>
              <td>1</td>
              <td>Sidik Tamvan</td>
              <td>Labuan Bajo</td>
              <td>bca.png</td>
              <td>pending</td>
              <td>##</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sidik Tamvan</td>
              <td>Labuan Bajo</td>
              <td>bca.png</td>
              <td>pending</td>
              <td>##</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sidik Tamvan</td>
              <td>Labuan Bajo</td>
              <td>bca.png</td>
              <td>pending</td>
              <td>##</td>
            </tr> */}
          </tbody>
        </Table>
      </Container>
    </main>
  );
};

export default ListTransaction;
