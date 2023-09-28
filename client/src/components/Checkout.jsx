import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCheckbox,
  MDBCol,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Checkout({ isLoggedIn }) {
  const navigate = useNavigate();
  const { cartTotal } = useCart();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="mx-auto mt-5" style={{ maxWidth: "900px" }}>
      <MDBRow>
        <MDBCol md="8" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">
                Billing details
              </MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <form>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label="First name" type="text" />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label="Last name" type="text" />
                  </MDBCol>
                </MDBRow>

                <MDBInput label="Company name" type="text" className="mb-4" />
                <MDBInput label="Address" type="text" className="mb-4" />
                <MDBInput label="Email" type="text" className="mb-4" />
                <MDBInput label="Phone" type="text" className="mb-4" />
                <MDBTextArea
                  label="Additional information"
                  rows={4}
                  className="mb-4"
                />
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0">
                Summary
              </MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>${cartTotal}</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>$0</span>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                  </div>
                  <span>
                    <strong>${cartTotal}</strong>
                  </span>
                </MDBListGroupItem>
              </MDBListGroup>

              <MDBBtn size="lg" block>
                Make purchase
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
