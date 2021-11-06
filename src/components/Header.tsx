import {useState} from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import {RootState} from '../app/store'
import logoimg from '../assets/images/logo.svg'
import { FaBars, FaRegWindowClose } from 'react-icons/fa'

const Header = () => {
    const cars = useSelector((state:RootState) => state.cars.values)
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <Nav>
                <img src={logoimg}/>
                <CenterMenu>
                    <ul>
                        {cars.map(car => (<li>{car.title}</li>))}
                    </ul>
                </CenterMenu>
                <CenterMenu>
                    <ul>
                        <li>Shop</li>
                        <li>Tesla Account</li>
                        <li><FaBars onClick={() => setOpenMenu(!openMenu)}/></li>
                    </ul>
                </CenterMenu>
            </Nav>
            <SideMenu openMenu={openMenu}>
                <CloseWrapper>
                    <FaRegWindowClose size={40} onClick={() => setOpenMenu(!openMenu)}/>
                </CloseWrapper>
                <ul>
                    <li>Existing Inventory</li>
                    <li>Used Inventory</li>
                    <li>Trade-In</li>
                    <li>Cybertruck</li>
                    <li>Roadster</li>
                </ul>
            </SideMenu>
        </>
    )
}

const Nav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const CenterMenu = styled.div`
    display: flex;
    margin: 0px 10px;
    ul{
        display: flex;
        list-style: none;
        li{
            margin: 0px 10px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
    }
`

interface SideMenuProps{
    openMenu: boolean;
}

const SideMenu = styled.div<SideMenuProps>`
    width: 300px;
    background: white;
    color: black;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    transform: ${(props) => props.openMenu ? 'translateX(0)' : 'translateX(100%)'};
    transition: 0.2s ease-in-out;
    z-index: 16;
    
    ul{
        list-style: none;
        li{
            border-bottom: black 2px solid;
            padding: 10px 0px;
            cursor: pointer;
            /* text-align: center; */
            /* width: 100%; */
        }
        
    }
`

const CloseWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    /* background: black; */
    justify-content: flex-end;
    padding: 5px;
    &:first-child{
        cursor: pointer;
    }
`

export default Header
