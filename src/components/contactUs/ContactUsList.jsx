import { useDispatch, useSelector } from "react-redux";

import { useEffect} from "react";

import { clearItems } from "../../store/reducers/customerReducer";

import { costactUsThunk } from "../../store/thunks/customerQueryThunk";

const ContactUsListPage = () => {
  const dispatch = useDispatch();

const {contactUsList} = useSelector((state)=> state.contactUs)


 useEffect (()=>{
    dispatch(costactUsThunk())
 },[dispatch])

  useEffect(()=>{
    return () => {
      dispatch(clearItems())
    };
  },[dispatch])

  return (
    <>
      <div className="card h-100 p-0 radius-12">
        <div className="card-body p-24">
          <div className="table-responsive scroll-sm">
            <table className="table bordered-table sm-table mb-0">
              <thead>
                <tr>
                  <th scope="col">
                    <div className="d-flex align-items-center gap-10">S.L</div>
                  </th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Message</th>
                  <th scope="col">Date</th>
                  <th scope="col">Issue Type</th>
                </tr>
              </thead>
              <tbody>
                {contactUsList && contactUsList?.length > 0
                  ? contactUsList.map((cust, index) => (
                      <tr key={cust?._id}>
                        <td>
                          <div className="d-flex align-items-center gap-10">
                            {index + 1}
                          </div>
                        </td>
                        <td>
                          {cust?.fullName}
                        </td>
                        <td>
                          <span className="text-md mb-0 fw-normal text-secondary-light">
                            {cust.email}
                          </span>
                        </td>
                        <td>{cust?.issueMsg}</td>
                         <td>
                          {new Date(cust?.createdAt).toLocaleDateString() ||
                            "-- --"}
                        </td>
                        <td className="text-center">
                          {cust?.issueType}
                        </td>

                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>


        </div>
      </div>
    </>
  );
};

export default ContactUsListPage;
