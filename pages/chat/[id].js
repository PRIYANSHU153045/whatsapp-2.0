import React from 'react';
import Head from 'next/head';
import Slidebar from '../../components/Slidebar'
import ChatScreen from '../../components/ChatScreen';
import styled from 'styled-components';
import {
    orderBy,
    query,
    getDocs,
    collection,
    doc,
    getDoc,
  } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import getRecipientEmail from "../../utils/getRecipientEmail";
  

const Container = styled.div`
display: flex;
`;
const ChatContainer = styled.div`
flex: 1;
overflow: scroll;
height: 100vh;
::-webkit-scrollbar{
    display:none;
}
-ms-overflow-style:none;
scrollbar-width: none;
`;


function Chat({ chat, messages }) {
    const [user]= useAuthState(auth);
  return (
      <Container>
          <Head>
              <title>Chat with {getRecipientEmail(chat.users, user)}</title>
          </Head>
          <Slidebar/>
          <ChatContainer>
              <ChatScreen chat={ chat } messages={ messages }/>
                
          </ChatContainer>
          
    </Container>
  )
}

export default Chat

export async function getServerSideProps(context) {
    const docRef = doc(db, `chats/${context.query.id}`);
  const colRef = collection(db, `chats/${context.query.id}/messages`);

  // PREP the messages on the server
  const messagesQuery = query(colRef, orderBy("timestamp", "asc"));
  const messagesRes = await getDocs(messagesQuery);

  const messages = messagesRes.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((msgs) => ({
      ...msgs,
      timestamp: msgs.timestamp.toDate().getTime(),
    }));

  // PREP the chats
  const chatRes = await getDoc(docRef);
  const chat = {
    id: chatRes.id,
    ...chatRes.data(),
  };

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat,
    },
  };
}
