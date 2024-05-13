import React, { useEffect, useRef } from "react";

import StockCard from "./StockCard";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatMoneyTrailingZero } from "@/utils/utils";
import { investmentColors } from "@/utils/styleUtils";
import { STOCK_LOGO_IMAGE } from "@/utils/constants";
import { table } from "console";

const dummyStocks = [
  {
    T: "AMZN",
    c: "87.36",
    o: "87.46",
    v: 61166283,
  },
  {
    T: "SHOP",
    c: "37.19",
    o: "37.70",
    v: 22978271,
  },
  {
    T: "MSFT",
    c: "227.12",
    o: "226.45",
    v: 20567159,
  },
  {
    T: "WMT",
    c: "144.95",
    o: "146.32",
    v: 3953216,
  },

  {
    T: "TSLA",
    c: "119.77",
    o: "118.96",
    v: 112643377,
  },

  {
    T: "NVDA",
    c: "156.28",
    o: "152.84",
    v: 47788389,
  },
];

const StockMoversCard = ({
  stocks,
  isLoadingStocks,
}: {
  stocks: any;
  isLoadingStocks: boolean;
}) => {
  const showCloudMigrationTwoStagesLDFlag = true;
  const tableRef = useRef(null);
  if (stocks.length === 0 || stocks === undefined) stocks = dummyStocks; //to deal with rate limit

  useEffect(()=>{
    if( tableRef.current){
      tableRef.current.parentNode.style.overflow = "hidden"
    }
    
  },[]);

  return (
    <>
      <h3 className=" text-lg font-sohnelight">Stock Movers</h3>
      <Table className="font-sohnelight my-2 !overflow-hidden" ref={tableRef} id = "stock-movers-table">
        {/* <TableCaption>Your Items</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Symbol</TableHead>
            <TableHead>Price ($)</TableHead>
            <TableHead>Gain/Loss (%)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stocks.map((stock, index) => {
            const percentageChange = formatMoneyTrailingZero(
              Math.round((stock.c - stock.o) * 100) / 100
            );
            const position = percentageChange.toString().includes("-") ? "negative" : "positive";
            return (
              <TableRow key={index}>
                <TableCell className="">
                  <div
                    className="text-left stock-icon-group flex items-center gap-x-2"
                    data-testid={`stock-card-column-icon-${index}-modal-mobile-test-id`}
                  >
                    <img
                      src={STOCK_LOGO_IMAGE[stock?.T].src}
                      alt={stock?.T}
                      className="h-8 w-8 sm:h-10 sm:w-10 rounded-sm bg-red object-fit"
                    />

                    <span>{stock?.T}</span>
                  </div>
                </TableCell>
                <TableCell className="">${stock.c}</TableCell>
                <TableCell className={`${investmentColors[position]}`}>
                    {percentageChange}%
                  </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default StockMoversCard;
