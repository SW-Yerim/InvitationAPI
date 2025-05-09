import React from "react";
import {
  Map,
  MapMarker,
  MapTypeControl,
  ZoomControl,
} from "react-kakao-maps-sdk";
import ContentTitle from "../common/ContentTitle";
import Layout from "../common/Layout";
import LocationItem from "../Items/LocationItem";
import LocationApi from "../Items/LocationApi";

const LocationSection: React.FC = () => (
  <Layout>
    {/* 제목 영역 */}
    <ContentTitle title="LOCATION" text="찾아오는길" />

    {/* 지도 API */}
    <LocationApi />

    {/* 찾아오는 길 텍스트 */}
    <LocationItem />
  </Layout>
);

export default LocationSection;
