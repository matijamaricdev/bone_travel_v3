import { useEffect, useRef } from "react";

const MyPOSEmbeddedCheckout = ({ checkoutId }) => {
  const checkoutRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && checkoutId) {
      const script = document.createElement("script");
      script.src = "https://www.mypos.com/checkout-sdk.js";
      script.async = true;
      script.onload = () => {
        if (window.MyPOSEmbeddedCheckout) {
          new window.MyPOSEmbeddedCheckout({
            container: checkoutRef.current,
            checkoutId,
          });
        }
      };
      document.body.appendChild(script);
    }
  }, [checkoutId]);

  return <div ref={checkoutRef} id="mypos-checkout"></div>;
};

export default MyPOSEmbeddedCheckout;
