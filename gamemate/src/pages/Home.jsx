import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import * as H from "../styles/StyledHome";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const goHome = () => navigate(`/`);
  const goList = () => navigate(`/list`);
  const goMyroom = () => navigate(`/my`);
  const goProf = () => navigate(`/profile`);

  return (
    <H.Container>
      <H.Nav></H.Nav>
    </H.Container>
  );
};
