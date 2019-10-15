import styled from 'styled-components'

import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { MdBookmarkBorder } from "react-icons/md"; 
import { MdBookmark } from "react-icons/md"; 

export const IconsContainer = styled.div`
    position: absolute;
    width: 25%;
    bottom: 0px;
    right: 0px;
    margin-right: 3%;
    margin-bottom: 1%;

    @media (max-width: 750px){
        width: 50%;
    }

`

export const BookMarks = styled(MdBookmarkBorder)`
  position: relative;
  float: right;
  font-size: 30px;
`;

export const SavedBookMarks = styled(MdBookmark)`
  position: relative;
  float: right;
  font-size: 30px;
`;


export const Like = styled(IoIosHeartEmpty)`
  position: relative;
  margin-right: 5%;
  font-size: 30px;
  float: right;
`;
export const LikedIcon = styled(IoIosHeart)`
  position: relative;
  margin-right: 5%;
  font-size: 30px;
  float: right;
`;

export const LikeNumber = styled.h1`
  position: relative;
  margin-right: 5%;
  font-size: 3vh;
  float: right;
`;

