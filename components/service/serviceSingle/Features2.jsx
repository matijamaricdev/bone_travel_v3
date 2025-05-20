import { features7 } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function Features2() {
  return (
    <section className="section">
      <div className="container-sub">
        <div className="mt-120">
          <h2 className="heading-44-medium mb-30 color-text title-fleet wow fadeInUp">
          Where can you use our services?
          </h2>
          <div className="content-single wow fadeInUp">
            <p>
            We are based in the Capital of Croatia, Zagreb, but we provide our clients with travel solutions throughout Croatia and surrounding countries.

Our trusted network of partners in Slovenia, Serbia, Montenegro and Bosnia and Herzegovina allows you to travel seamlessly using just one booking channel.

Whether you're journey starts, or ends in our area of operations, we will be happy to provide you with services you need.
            </p>
            <ul className="list-ticks list-ticks-small">
              {features7.map((elm, i) => (
                <li key={i} className="text-16 mb-20">
                  {elm}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row align-items-center mt-90">
          <div className="col-lg-6 mb-30 wow fadeInUp">
            <Image
              width={1710}
              height={1800}
              style={{ height: "fit-content" }}
              src="/assets/imgs/page/services/intercitytransfer.png"
              alt="luxride"
            />
          </div>
          <div className="col-lg-6 mb-30">
            <div className="box-info-right wow fadeInUp">
              <h3 className="heading-44-medium color-text mb-30">
              Intercity Transfers
              </h3>
              <p className="text-16 color-text">
              Leave and arrive on your schedule. With our intercity transfers you can make the most out of your time. Also, for distances of few hundred kilometers, booking a private ride gets you there faster than a plane. All major cities are well connected with good roads, so a trip from Zagreb to Split would take a mere 3 and a half hours. Zagreb to Budapest? Same. Zagreb to Belgrade? 4 hours including normal traffic at the border. If you're travelling in a group, booking a business minivan can cost you less than a flight ticket for all. So whenever you're travelling from one city to another, or to a festival, sports game or a concert, consider getting a private transfer, as this will allow you to avoid crowds and busy travel terminals, handle private calls or get some extra sleep. No matter the distance or time needed, you can rely on our drivers to get you there safe.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center mt-90">
          <div className="col-lg-6 mb-30">
            <div className="box-info-left wow fadeInUp">
              <h3 className="heading-44-medium color-text mb-30">
              Hourly Services
              </h3>
              <p className="text-16 color-text">
              Having a car wait for you every time you step outside and transfer you to your next destination is the most comfortable way of travelling within the city. On the other hand, having to wait for a taxi after one meeting and being late for the next one can bring unnecessary stress which can throw you out of balance. Avoid waiting, unexperienced drivers and stress by booking an hourly service. Enjoy this type of service for handling your business meetings, lunch and dinner, festivals and concerts or even weddings. You got a few hours to spare and want to get to know historic cities like Zagreb, Split, Dubrovnik or Ljubljana? We'll take you around and can even hire a licensed tour guide for the best experience.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mb-30 wow fadeInUp">
            <Image
              width={1710}
              height={1800}
              style={{ height: "fit-content" }}
              src="/assets/imgs/page/services/hourlyservices.png"
              alt="luxride"
            />
          </div>
        </div>
        <div className="row align-items-center mt-90">
          <div className="col-lg-6 mb-30 wow fadeInUp">
            <Image
              width={1710}
              height={1800}
              style={{ height: "fit-content" }}
              src="/assets/imgs/page/services/daytrips.png"
              alt="luxride"
            />
          </div>
          <div className="col-lg-6 mb-30">
            <div className="box-info-right wow fadeInUp">
              <h3 className="heading-44-medium color-text mb-30">
              Day Trips
              </h3>
              <p className="text-16 color-text">
              We organize and suggest individual tours outside the city and into the nature. Having the need to refill your batteries, see exciting new places during your travel or you want to take your business partner somewhere outside the office and build a stronger relationship? Places like Plitvice Lakes and Krka Waterfalls in Croatia, or Bled and Postojna caves in Slovenia are just some of excellent ideas to spend the day. The entire length of Croatian coastline offers remarkable things to see, experience and taste. Even if you don't need a tour guide, which is highly recommended, our drivers know the general information about the location and can advise you what's best to do on the spot.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center mt-90 mb-120">
          <div className="col-lg-6 mb-30">
            <div className="box-info-left wow fadeInUp">
              <h3 className="heading-44-medium color-text mb-30">
              Airport Transfers
              </h3>
              <p className="text-16 color-text">
              Flights can be exhausting. Whenever you're arriving at Zagreb Airport for business meetings, or departing from Dubrovnik Airport after a holiday, why should you exhaust further trying to decipher local language, getting to know what the rates are and, possibly, end up paying much more than you thought. Save yourself the trouble and book a private transfer to or from your airport. On pick-ups from your accommodation complimentary waiting time is 15 minutes. While at the airport it can take you anything between 15-45 minutes to exit with your luggage, we include a 60 minutes waiting time. Your driver will be waiting for you holding a sign of your choice and assist you with your belongings. Upon making a reservation, please expect a confirmation email that your service is guaranteed. Prices are fixed, so you always know what you're paying and drivers are locally knowledgeable, so feel free to engage in a friendly conversation with them.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mb-30 wow fadeInUp">
            <Image
              width={1710}
              height={1800}
              style={{ height: "fit-content" }}
              src="/assets/imgs/page/services/airporttransfers.png"
              alt="luxride"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
