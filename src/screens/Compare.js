import React from "react";
import Header from "../components/Header/Header";
import { Helmet } from "react-helmet";

function Compare() {
  return (
    <>
      <Helmet>
        <title>Compare Your Favorite Models - Saboo Nexa</title>

        <meta
          name="title"
          content="Compare Your Favorite Models - Saboo Nexa"
        />
        <meta
          name="description"
          content="Compare features, specifications, and prices of your favorite car models at Saboo Nexa to make an informed decision."
        />
        <meta
          name="keywords"
          content="Compare, Models, Features, Specifications, Prices, Saboo Nexa"
        />
        <meta name="author" content="Broaddcast" />
      </Helmet>
      <Header />
      <p className="mt-16 text-2xl font-semibold text-center">Compare Cars</p>
      <div className="flex items-center justify-center">
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Product-thumbnail/Saboo-Nexa-product-Ignis.webp"
          alt="1"
        />
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Product-thumbnail/Saboo-Nexa-product-Ignis.webp"
          alt="1"
        />
        <img
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Product-thumbnail/Saboo-Nexa-product-Ignis.webp"
          alt="1"
        />
      </div>
      <div>
        <p className="mx-5 mb-3 text-xl font-semibold">Information</p>
        <table className="w-full mx-4 text-sm text-center uppercase border border-collapse table-auto border-slate-400">
          <tbody>
            <tr>
              <th className="border border-slate-300 px-3 py-2.5">Variant</th>
              <th className="border border-slate-300 px-3 py-2.5">Ignis</th>
              <th className="border border-slate-300 px-3 py-2.5">Baleno</th>
            </tr>
          </tbody>
        </table>

        <p className="mx-5 mt-5 mb-3 text-xl font-semibold">Engine</p>
        <table className="w-full mx-4 text-sm text-center border border-collapse table-auto border-slate-400">
          <tbody>
            <tr>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Engine Type
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                K15C SMART HYBRID
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                K15C SMART HYBRID
              </td>
            </tr>
            <tr>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                No Of Cylinder
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                K15C SMART HYBRID
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                K15C SMART HYBRID
              </td>
            </tr>
            <tr>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Power (kw @ RPM)
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                75.8 @ 6000
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                75.8 @ 6000
              </td>
            </tr>
            <tr>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Torque (nm @ RPM)
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                136.8 @ 4400
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                136.8 @ 4400
              </td>
            </tr>
          </tbody>
        </table>

        <p className="mx-5 mt-5 mb-3 text-xl font-semibold">Fuel</p>
        <table className="w-full mx-4 text-sm text-center border border-collapse table-auto border-slate-400">
          <tbody>
            <tr>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Fuel Type
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Petrol
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Petrol
              </td>
            </tr>
            <tr>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Fuel Tank Capacity
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                35.0 (Litres)
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                35.0 (Litres)
              </td>
            </tr>
            <tr>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Mileage
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                25.20 kmpl
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                25.20 kmpl
              </td>
            </tr>
          </tbody>
        </table>

        <p className="mx-5 mt-5 mb-3 text-xl font-semibold">
          Dimensions & Weight
        </p>
        <table className="w-full mx-4 text-sm text-center border border-collapse table-auto border-slate-400">
          <tbody>
            <tr>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Length (mm)
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                4445
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                4445
              </td>
            </tr>
            <tr>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Width (mm)
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                1775
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                1775
              </td>
            </tr>
            <tr>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Height (mm)
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                1755
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                1755
              </td>
            </tr>
            <tr>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                WheelBase (mm)
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                2740
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                2740
              </td>
            </tr>
            <tr>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Kerb Weight (kg)
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                1740 (MT), 1765 (AT)
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                1740 (MT), 1765 (AT)
              </td>
            </tr>
            <tr>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Gross Vehicle Weight (kg)
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                1200 (MT), 1225 (AT)
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                1200 (MT), 1225 (AT)
              </td>
            </tr>
          </tbody>
        </table>

        <p className="mx-5 mt-5 mb-3 text-xl font-semibold">
          Seating, Suspension & Brakes
        </p>
        <table className="w-full mx-4 text-sm text-center border border-collapse table-auto border-slate-400">
          <tbody>
            <tr>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Rear Suspension
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Torsion Beam & Coil Spring
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Torsion Beam & Coil Spring
              </td>
            </tr>
            <tr>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Front Suspension
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                MacPherson Strut & Coil Spring
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                MacPherson Strut & Coil Spring
              </td>
            </tr>
            <tr>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Rear Suspension
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Torsion Beam & Coil Spring
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Torsion Beam & Coil Spring
              </td>
            </tr>
            <tr>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Front Brakes
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Disc
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Disc
              </td>
            </tr>
            <tr>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Rear Brakes
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Drum
              </td>
              <td className="border border-slate-100 font-normal px-3 py-3.5 text-base">
                Drum
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Compare;
