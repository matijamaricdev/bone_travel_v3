"use client";

import { useEffect, useRef, useState } from "react";
import { activeInputFocus } from "@/utlis/activeInputFocus";
import SideBar from "./SideBar";
import Image from "next/image";
import Link from "next/link";
import MyPosEmbeddedCheckout from "@/components/booking/MyPosEmbeddedCheckout";

export default function BookingPayment() {
  const checkoutRef = useRef(null);
  const [checkoutId, setCheckoutId] = useState(null);


  return (
    <div className="box-row-tab mt-50">
      <div className="box-tab-left">
        <div className="box-content-detail">
          <h3 className="heading-24-medium color-text mb-30">Invoice details</h3>

          {/* Existing Form Elements */}
          <div className="form-contact form-comment">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullname">Name</label>
                    <input className="form-control" id="fullname" type="text" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="lastname">Last Name</label>
                    <input className="form-control" id="lastname" type="text" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label className="form-label" htmlFor="address">Address</label>
                    <input className="form-control" id="address" type="text" />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* MyPOS Checkout Section */}
          <div className="mt-30">
            <h3 className="heading-24-medium color-text mb-30">Payment</h3>
            <div>
              {checkoutId ? (
                <MyPosEmbeddedCheckout checkoutId={checkoutId} />
              ) : (
                <p>Loading payment form...</p>
              )}
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="mt-30">
            <label className="mb-10" htmlFor="agree-cb">
              <input className="cb-agree" id="agree-cb" type="checkbox" />I accept the Terms & Conditions - Booking Conditions and Privacy Policy. *
            </label>
          </div>

          {/* Submit Button */}
          <div className="mt-30 mb-120">
            <Link className="btn btn-primary btn-primary-big w-100" href="/booking-receved">
              Proceed to Payment
            </Link>
          </div>
        </div>
      </div>
      <SideBar />
    </div>
  );
}
