import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getRoomDetail } from "../api/RoomApi";
import * as R from "../styles/StyledRoom";

const RoomDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { roomId: routeRoomId } = useParams();
  const goBack = () => navigate(-1);
  const [room, setRoom] = useState(null);
  const [message, setMessage] = useState("");
  const roomId = routeRoomId || location.state?.roomId;

  useEffect(() => {
    const loadRoomDetail = async () => {
      try {
        setMessage("");
        const roomData = await getRoomDetail(roomId);
        setRoom(roomData);
      } catch (error) {
        setRoom(null);
        setMessage(error.message || "방 정보를 불러오는 중 문제가 발생했습니다.");
      }
    };

    loadRoomDetail();
  }, [roomId]);

  const gameName = room?.game?.name_ko || room?.game?.name || "게임 미정";
  const ownerName = room?.owner?.nickname || room?.owner?.username || "방장";
  const playTime = room?.play_time_label || "시간대 미정";
  const memberCount =
    room && `${room.approved_member_count}/${room.max_members}`;

  return (
    <R.Container>
      <R.Header>
        <R.Title>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/back.svg`}
            alt="back"
            onClick={goBack}
          />
          <R.CTitle>
            <div id="title">GAMEMATE</div>
          </R.CTitle>
        </R.Title>
      </R.Header>

      <R.Body>
        <R.Board>
          {message && <R.Description>{message}</R.Description>}

          {room && (
            <R.Content>
              <R.TitleContent>
                <R.ProfileImg
                  style={{ background: room.game?.color || "#d9d9d9" }}
                />

                <R.Text>
                  <R.Up>
                    <div id="title">{room.title}</div>
                  </R.Up>
                  <R.Down>방장 ∙ {ownerName}</R.Down>
                </R.Text>
              </R.TitleContent>

              <R.Rcontent>
                <R.OptionContent>
                  <div>{memberCount}</div>
                  <div>{playTime}</div>
                  <div>{gameName}</div>
                </R.OptionContent>
                <R.Description>
                  <div>{room.description || "방 소개가 없습니다."}</div>
                </R.Description>
              </R.Rcontent>

              <R.Button type="button">들어가기</R.Button>
            </R.Content>
          )}
        </R.Board>
      </R.Body>
    </R.Container>
  );
};

export default RoomDetail;
