import { FaWallet, FaPiggyBank, FaChartLine } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import NavBar from "../Components/NavBar/NavBar";

const transactions = [
  { id: 1, type: "Deposit", amount: "+$500", date: "2025-03-25" },
  { id: 2, type: "Investment", amount: "-$200", date: "2025-03-24" },
  { id: 3, type: "Savings", amount: "-$150", date: "2025-03-23" },
];

const data = [
  { month: "Jan", value: 500 },
  { month: "Feb", value: 700 },
  { month: "Mar", value: 600 },
  { month: "Apr", value: 800 },
];

const DashBoard = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col md:flex-row transition-all p-6 mt-16">
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg flex items-center">
              <FaWallet className="text-3xl" />
              <div className="ml-4">
                <h2 className="text-lg">Total Balance</h2>
                <p className="text-xl font-semibold">$10,250</p>
              </div>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center">
              <FaChartLine className="text-3xl" />
              <div className="ml-4">
                <h2 className="text-lg">Investments</h2>
                <p className="text-xl font-semibold">$5,600</p>
              </div>
            </div>
            <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-lg flex items-center">
              <FaPiggyBank className="text-3xl" />
              <div className="ml-4">
                <h2 className="text-lg">Savings</h2>
                <p className="text-xl font-semibold">$2,300</p>
              </div>
            </div>
          </div>

          {/* Recent Transactions Table */}
          <h2 className="text-xl font-bold mt-6">Recent Transactions</h2>
          <div className="bg-white shadow-md rounded-lg p-4 mt-4">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="py-2">Type</th>
                  <th className="py-2">Amount</th>
                  <th className="py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn) => (
                  <tr key={txn.id} className="border-t">
                    <td className="py-2">{txn.type}</td>
                    <td className={`py-2 ${txn.amount.includes("+") ? "text-green-600" : "text-red-600"}`}>
                      {txn.amount}
                    </td>
                    <td className="py-2">{txn.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Investment Performance Chart */}
          <h2 className="text-xl font-bold mt-6">Investment Performance</h2>
          <div className="bg-white shadow-md rounded-lg p-4 mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tracker Section - Below chart on small screens, beside chart on large screens */}
        <div className="w-full md:w-1/3 lg:w-1/4 mt-6 md:mt-0 md:ml-8">
          <h2 className="text-xl font-bold mt-6">Your Progress Tracker</h2>

          {/* Progress Tracker Card */}
          <div className="bg-white shadow-md rounded-lg p-4 mt-4">
            <h3 className="font-semibold text-lg">Savings Goal</h3>
            <div className="my-2">
              <p className="text-sm">Goal: $5,000</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "46%" }}></div>
              </div>
              <p className="text-sm mt-1">Current: $2,300</p>
            </div>
          </div>

          {/* Monthly Spending Tracker */}
          <div className="bg-white shadow-md rounded-lg p-4 mt-4">
            <h3 className="font-semibold text-lg">Monthly Spending</h3>
            <div className="my-2">
              <p className="text-sm">Budget: $2,500</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "70%" }}></div>
              </div>
              <p className="text-sm mt-1">Spent: $1,750</p>
            </div>
          </div>

          {/* Upcoming Investments */}
          <div className="bg-white shadow-md rounded-lg p-4 mt-4">
            <h3 className="font-semibold text-lg">Upcoming Investments</h3>
            <ul className="list-disc ml-5">
              <li className="text-sm">Investment in Tech Fund - $1,000</li>
              <li className="text-sm">Investment in Real Estate Fund - $500</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
