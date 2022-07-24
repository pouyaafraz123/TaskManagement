import React from "react";
import FeedIcon from '@mui/icons-material/Feed';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import styled from "styled-components";

const TopBarItems = (props) => {
    const items = [{icon: <FeedIcon/>, label: "Backlog"},
        {icon: <DashboardIcon/>, label: "Board"},
        {icon: <NewspaperIcon/>, label: "Feed"},
        {icon: <WatchLaterIcon/>, label: "Reports"}];
    return items.map((item) => {
        return (
            <>
                <li className="nav-item pl-lg-3 pt-lg-0 pt-md-2 pt-2">
                    <NavLinks className="nav-link" href="#">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="">
                                {item.icon}
                            </div>
                            <div className=" pl-1">
                                {item.label}
                            </div>
                        </div>
                    </NavLinks>
                </li>
            </>
        );
    })
}

const NavLinks = styled.a`
  color: #b3caff !important;

  &:hover {
    color: white !important;
  }
`;

export default TopBarItems;