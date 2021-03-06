import styled from "styled-components"
import Link from "next/link"
import Logo from "../assets/icons/header-logo.svg"

const StyledServices = styled.div`
  * {
    font-family: NeueMontrealRegular;
    color: ${({ theme }) => theme.colors.text};
    ${({ theme }) => theme.textStyles.h6};
  }
  z-index: 100;
  width: 100vw;
  height: 10vh;
  position: fixed;
  top: 0;
  padding: 0 max(5vw, 50px);

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  .left {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    .logo {
      margin-right: 10px;
    }
    .logo-text {
      font-family: "BerlinBold";
    }
  }

  .right ul {
    display: flex;
    flex-flow: row nowrap;
    width: max(20vw, 250px);
    justify-content: space-between;
  }
`

const Services = () => {
  return (
    <StyledServices>
      <Link href='/'>
        <a>
          <div className='left'>
            <Logo className='logo' />
            <div className='logo-text'>Sandwich.Studio</div>
          </div>
        </a>
      </Link>
      <div className='right'>
        <ul>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/services'>
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              <a>Projects</a>
            </Link>
          </li>
        </ul>
      </div>
    </StyledServices>
  )
}

export default Services
