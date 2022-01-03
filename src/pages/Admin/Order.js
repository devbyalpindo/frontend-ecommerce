import React from "react";
import Sidebar from "../../components/layout-member/Sidebar";
import Main from "../../components/layout-member/Main";
import TabContent from "../../components/Order/TabContent";

const Order = () => {
  return (
    <div className='flex h-screen bg-gray-50 dark:bg-gray-900'>
      <Sidebar />
      <Main>
        <div className='container px-6 mx-auto grid'>
          <h2 className='my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>
            Pesanan
          </h2>
          <div className='flex'>
            <TabContent />
          </div>
        </div>
      </Main>
    </div>
  );
};

export default Order;
