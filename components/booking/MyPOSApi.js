// File: /pages/api/create-checkout.js (or App Router equivalent)
export default async function handler(req, res) {
  const { amount, currency } = req.body;

  const myPOSRes = await fetch("https://www.mypos.com/api/checkout", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.MYPOS_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount,
      currency,
    }),
  });

  const data = await myPOSRes.json();

  if (data.checkoutId) {
    res.status(200).json({ checkoutId: data.checkoutId });
  } else {
    res.status(500).json({ error: "Failed to create checkout" });
  }
}
