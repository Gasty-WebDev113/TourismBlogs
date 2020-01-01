import styled from 'styled-components'

import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { MdBookmarkBorder } from "react-icons/md"; 
import { MdBookmark } from "react-icons/md"; 
import { MdAddAPhoto } from "react-icons/md";

import {Loader} from '../components/Loader'

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

export const Photo = styled(MdAddAPhoto)`
  color: white;
  height: 5vh;
  width: 5vw;
  position: absolute;
  z-index: 1;
  cursor: pointer;
  &:hover{
    color: yellow;
  }
`

export const SelectedPhoto = styled(Photo)`
  color: yellow;
`
export const UploadLoader = styled(Loader)`
  position: absolute;
`