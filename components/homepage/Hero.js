import { useContext } from "react"
import styled from "styled-components"
import ContactCircle from "../../assets/icons/contact-us-circle.svg"
import { useTranslation } from "next-i18next"

const StyledHero = styled.div`
  background: red;
  width: 100vw;
  height: 100vh;
  padding: 12vh max(5vw, 50px) 5vh max(5vw, 50px);

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  overflow: hidden;

  * {
    font-family: NeueMontrealRegular;
    color: ${({ theme }) => theme.colors.text};
  }

  p:first-letter,
  span:first-letter {
    text-transform: capitalize;
  }

  .top-line,
  .bottom-line {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
  }

  .top-line {
    justify-content: flex-end;
    p {
      ${({ theme }) => theme.textStyles.h3};
      width: 40%;
      text-align: right;
    }
  }

  .bottom-line {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    p {
      ${({ theme }) => theme.textStyles.h3};
      width: 40%;
    }
  }

  .we-are {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-flow: row nowrap;
    .left {
      text-transform: none;
    }
    .spacer {
      visibility: hidden;
    }
    span,
    .spacer {
      ${({ theme }) => theme.textStyles.h1};
      white-space: nowrap;
    }
  }
`

const Hero = () => {
  const { t } = useTranslation("common")

  return (
    <StyledHero>
      <div className='top-line'>
        <p>{t("topLine")}</p>
      </div>
      <div className='we-are'>
        <span className='left'>We are</span>
        <div className='spacer'>_</div>
        <span className='right'>branding</span>
      </div>
      <div className='bottom-line'>
        <p>{t("bottomLine")}</p>
        <div className='contact-spinner'>
          <ContactCircle />
        </div>
      </div>
    </StyledHero>
  )
}

export default Hero
