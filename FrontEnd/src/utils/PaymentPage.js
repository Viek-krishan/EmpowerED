import {
  CreditCard,
  Gift,
  Landmark,
  SmartphoneNfc,
  Wallet,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-web";

const PaymentService = () => {
  const Payments = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: Payments.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/PaymentsSVG.json"),
    });
  });
  return (
    <div className="flex w-full bg-gray-200">
      {/* <h1>hello</h1> */}
      <section className="payment_selection_area  w-1/2 flex flex-col h-full text-black">
        <div className="upi_payment flex justify-center items-center p-2 m-5 rounded-lg bg-[#0c0b1e] text-white border border-[#1ad179]">
          <div className="w-1/4 flex items-center">
            <SmartphoneNfc className="m-1 " />
            <h1>UPI</h1>
          </div>
          <div className="w-3/4">
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
              name="upi"
            >
              <option value={""}>Select</option>
              <option value={"PayTm"}>PayTm</option>
              <option value={"Google Pay"}>Google Pay</option>
              <option value={"Phone Pay"}>Phone Pay</option>
              <option value={"BHIM UPI"}>BHIM UPI</option>
              <option value={"Amazon Pay"}>Amazon Pay</option>
              <option value={"Other"}>Others</option>
            </select>
          </div>
        </div>
        <div className="wallet_payment flex justify-around items-center p-2 m-5 rounded-lg bg-[#0c0b1e] text-white border border-[#1ad179]">
          <div className="w-1/4 flex items-center">
            <Wallet className="m-1" />
            <h1>Wallet</h1>
          </div>
          <div className="w-3/4">
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
              name="upi"
            >
              <option value={""}>Select</option>
              <option value={"PayTm"}>PayTm</option>
              <option value={"Phone Pay"}>Phone Pay</option>
              <option value={"BHIM UPI"}>BHIM UPI</option>
              <option value={"Amazon Pay"}>Amazon Pay</option>
              <option value={"Google Pay"}>Mobiquick</option>
              <option value={"Other"}>Others</option>
            </select>
          </div>
        </div>
        <div className="card_payment flex justify-around items-center p-2 m-5 rounded-lg bg-[#0c0b1e] text-white border border-[#1ad179]">
          <div className="w-1/4 flex items-center">
            <CreditCard className="m-1" />
            <h1>Card Credit/Debit</h1>
          </div>
          <div className="w-3/4">
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
              name="upi"
            >
              <option value={""}>Select</option>
              <option value={"credit"}>Credit Card</option>
              <option value={"debit"}>Debit Card</option>
            </select>
          </div>
        </div>
        <div className="net_banking_payment flex justify-around items-center p-2 m-5 rounded-lg bg-[#0c0b1e] text-white border border-[#1ad179]">
          <div className="w-1/4 flex items-center">
            <Landmark className="m-1" />
            <h1>Net Banking</h1>
          </div>
          <div className="w-3/4">
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
              name="upi"
            >
              <option value={""}>Select</option>
              <option value={"State Bank of India"}>State Bank of India</option>
              <option value={"Kotak Mahindra Bank"}>Kotak Mahindra Bank</option>
              <option value={"Bank of India"}>Bank of India</option>
              <option value={"Axis Bank"}>Axis Bank</option>
              <option value={"ICICI Bank"}>ICICI Bank</option>
              <option value={"HDFC bank"}>HDFC bank </option>
              <option value={"Indian Bank"}>Indian Bank</option>
              <option value={"Punjab National Bank"}>
                Punjab National Bank
              </option>
              <option value={"Yes Bank"}>Yes Bank</option>
            </select>
          </div>
        </div>
        <div className="gift_card_payment flex justify-around items-center p-2 m-5 rounded-lg bg-[#0c0b1e] text-white border border-[#1ad179]">
          <div className="w-1/4 flex items-center">
            <Gift className="m-1" />
            <h1>Gift Card</h1>
          </div>
          <div className="w-3/4">
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-Rajdhani"
              name="upi"
            >
              <option value={""}>Select</option>
              <option value={"PayTm"}>PayTm</option>
              <option value={"Phone Pay"}>Phone Pay</option>
              <option value={"BHIM UPI"}>BHIM UPI</option>
              <option value={"Amazon Pay"}>Amazon Pay</option>
              <option value={"Google Pay"}>Mobiquick</option>
            </select>
          </div>
        </div>
        <div className="proceed_with_payment w-full flex justify-center items-center">
          <Link
            className={`text-black bg-gray-100 m-4 w-fit p-5 h-10 rounded-xl flex justify-center items-center hover:scale-110 transition duration-150 ease-in-out hover:bg-[#1ad179] drop-shadow-lg hover:drop-shadow-2xl hover:text-black hover:font-medium`}
          >
            Proceed For Payment
          </Link>
        </div>
      </section>
      <section className="w-1/2 flex h-full justify-center items-center">
        <div className="w-3/4" ref={Payments}></div>
      </section>
    </div>
  );
};

export default PaymentService;
