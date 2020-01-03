import React, {useState} from 'react';
import styled from 'styled-components';
import Fuse from 'fuse.js';
import house from '../../img/house.png';
import trophy from '../../img/trophy.png';
import folder from '../../img/folder.png';

import computer from '../carousel/carousel/computer.jpeg';

import CarouselVids from '../carousel/CarouselVids';

const NavBarContainer = styled.div`    
    display: flex;
    justify-content: flex-end;
    background-color: #F5F4F4;
    align-items: center;
`;

const NavBarItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px
    align-items: center;
`;

const FilterInput = styled.input`
    padding-left: 15px;
    display: flex;
    justify-content: center;
    margin: 10px auto;
    width: 90%;
    line-height: 1.25rem;
    font-size: 1rem;
    font-style: italic;
    outline-style: none;
    border-radius: 5px;
    margin: 20px auto;
    background-color: #F5F4F4;
`;

const Container = styled.div`
    max-width: 500px;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const SaveVideosContainer = styled.div`
    margin: 30px 0;
`;

const LiveFeedContainer = styled.div`
    margin: 30px 0;
`;


const LiveFeedIMG = styled.img`
    border-radius: 50%;
    height: 30px;
    width: 30px;
`;

const LiveFeedItem = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 10px;
`;

const LiveFeedText = styled.p`
    align-items: center;
    margin: 10px;
`;

const LiveFeedEllipse = styled.div`
    width: 2px;
    height: 2px;
    display: flex;
    align-items: center;
`;

const H3 = styled.h3`
    margin-left: 10px;
    font-family: Roboto;
`;

const IMG = styled.img`
    width: 30px;
    height: 30px;
  
  ${props => props.alt === "house"
    ? `{background: white;}`    // works !!!
    : null
  }
  
  ${props => props.alt === "house"
    ? `{background: dodgerblue;}`
    : null
  }
  
  ${props => props.alt === "house"
    ? `{background: white;}`
    : null
}
`
const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    background-color: #F5F4F4;
    padding: 25px;
`;


const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 50px;
    height: 50px;
    align-items: center;
`;

// font style
const NavItemText = styled.div`
    font-family: 'Roboto', sans-serif;
`;

// Fuse search options
const options = {
    shouldSort: true,
    threshold: 0.5,
    location:4,
    distance: 10,
    maxPatternLength: 12,
    minMatchCharLength: 1,
    keys: [
      "name",
    ]
  };

export const SavedVideos = () => {
    const [videos, getVideos] = useState([]);
    const [videoNameSearched, setVideoNameSearched] = useState('');
    const fuse = new Fuse(videos, options);


    // either of these could be used to filter out BE data to conditionally render below
    // Method 1) easy way to filter
    const videosFound = videos.filter(vidFound => {
        return vidFound.name.toLowerCase().indexOf(videoNameSearched.toLowerCase()) !== -1;
    })
    
    // Method 2) a more elaboarate way to search strings & substrings
    // const videosFound = videoNameSearched ? fuse.searched(videoNameSearched) : videos;

    return (
        <Container> 
            <NavBarContainer>
                <NavBarItem onClick = {() => alert('search')}>
                    <i className="fas fa-search"></i>
                </NavBarItem>
                <NavBarItem onClick = {() => alert('User')}>
                    <i className="fas fa-user"></i>
                </NavBarItem>
            </NavBarContainer>


            <FilterInput
                placeholder = 'Filter'
                value={videoNameSearched}
                onChange={e => {setVideoNameSearched(e.target.value)}}
            />


            <SaveVideosContainer>
                <H3>Saved Videos</H3>
                <div> 
                    <CarouselVids/>
                </div>
            </SaveVideosContainer>


            <LiveFeedContainer>
                <H3> Live Feed </H3>
                <img src ={computer} alt = 'temp' width = '100%'/>
                <LiveFeedItem>
                    <LiveFeedIMG src ={computer} alt = 'temp' width = '100%'/>
                    <LiveFeedText> Clutter! Clutter! Work better and faster by tidying up your workspace.</LiveFeedText>
                    <LiveFeedEllipse>
                        <i class="fas fa-ellipsis-h"></i>  
                    </LiveFeedEllipse>    
                
                    </LiveFeedItem>
            </LiveFeedContainer>
        

            <Footer>
                <NavItem>
                    <IMG src = {house} alt = "house"/>
                    <NavItemText> Home </NavItemText>
                </NavItem>
                <NavItem>
                    <IMG src = {trophy} alt = "trophy"/>
                    <NavItemText> Popular </NavItemText>
                </NavItem>
                <NavItem>
                    <IMG src = {folder} alt = "folder"/>
                    <NavItemText> Saved </NavItemText>
                </NavItem>
            </Footer>
        </Container>
    )
}


