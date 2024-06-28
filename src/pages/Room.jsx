import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { useParams } from 'react-router-dom'

function Room() {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    const appID = 857695070;
    const serverSecret = process.env.SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID, serverSecret, roomId,
      Date.now().toString(),
      'Abhinand'
    )
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference
      }
    })
  }

  return (
    <div>
      <div ref={myMeeting} />
    </div>
  )
}

export default Room