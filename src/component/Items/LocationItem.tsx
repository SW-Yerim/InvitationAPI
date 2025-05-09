import React from "react";

const LocationItem = () => {
  return (
    <div>
      <ul className="max-w-[20rem] lg:w-full lg:max-w-md mx-auto text-left">
        <li className="flex gap-4 mb-4">
          <div className="w-10 h-10 bg-quasi-brown2 rounded-3xl">
            <img className="p-2" src="/icons/tram.svg" alt="지하철 아이콘" />
          </div>
          <div>
            <h2 className="mb-1 font-bold">지하철</h2>
            <p className="text-sm">[7호선] 청담역 12번 출구 바로 앞</p>
          </div>
        </li>
        <li className="flex gap-4 mb-4">
          <div className="w-10 h-10 bg-quasi-brown2 rounded-3xl">
            <img className="p-2" src="/icons/bus.svg" alt="버스 아이콘" />
          </div>
          <div>
            <h2 className="mb-1 font-bold">버스</h2>
            <p className="text-sm">
              청담역, 경기고교(진흥아파트 방면) 정류장 하차
              <br />
              [버스번호]
              <br />
              301, 401, 2415, 3414, 3426, 4419
            </p>
          </div>
        </li>
        <li className="flex gap-4 mb-4">
          <div className="w-10 h-10 bg-quasi-brown2 rounded-3xl">
            <img className="p-2" src="/icons/car.svg" alt="자동차 아이콘" />
          </div>
          <div>
            <h2 className="mb-1 font-bold">자가용</h2>
            <p className="text-sm">
              [빌라드지디 청담]
              <br />
              서울특별시 강남구 학동로 519
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LocationItem;
