import styled from "styled-components"
import Link from "next/link"
import Logo from "../assets/icons/header-logo.svg"
import { motion } from "framer-motion"
import { useState } from "react"

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
    li {
      position: relative;
      overflow: hidden;
      a {
        display: block;
        cursor: pointer;
        .anim-link {
          &.bottom-link {
            position: absolute;
          }
        }
      }
    }
  }
`

const variants = {
  hovering: { y: [0, 0, -30], skew: [0, 25, 0], transition: { ease: "easeOut", duration: 0.25 } },
}

const Services = () => {
  const [hovering, setHovering] = useState(false)

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
          {["About", "Services", "Projects"].map((link, i) => (
            <li>
              <Link href={`/${link.toLowerCase()}`}>
                <motion.a whileHover='hovering'>
                  <motion.div variants={variants}>
                    <div className='anim-link top-link'>{link}</div>
                    <div className='anim-link bottom-link'>{link}</div>
                  </motion.div>
                </motion.a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </StyledServices>
  )
}

export default Services
