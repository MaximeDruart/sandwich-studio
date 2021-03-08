import styled from "styled-components"
import { useTranslation } from "next-i18next"
import { motion } from "framer-motion"

const StyledServices = styled.div`
  border: 1px solid yellow;
  width: 100vw;
  /* overflow: hidden; */

  padding: 5vh max(5vw, 50px) 0 max(5vw, 50px);

  * {
    font-family: NeueMontrealRegular;
    color: ${({ theme }) => theme.colors.text};
  }

  .headline {
    ${({ theme }) => theme.textStyles.headline};
    white-space: nowrap;
    width: 100%;
  }

  .design {
    margin-top: 20vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    text-align: right;

    .left {
    }

    .right {
      width: 40%;
      .title {
        ${({ theme }) => theme.textStyles.h2};
      }
    }
  }
`

const Services = () => {
  const { t } = useTranslation("common")

  return (
    <StyledServices data-scroll-section>
      <div data-scroll data-scroll-direction='horizontal' data-scroll-speed='9' className='headline'>
        {t("services-headline")}
      </div>

      <div className='design'>
        <div className='left'>
          <motion.svg width='199' height='234' viewBox='0 0 199 234' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M3.27139 0.5H195.472C197.002 0.5 198.242 1.74041 198.242 3.27054V32.0885V63.6769H0.500854V3.27054C0.500854 1.74041 1.74127 0.5 3.27139 0.5Z'
              fill='white'
              stroke='white'
            />
            <rect x='0.5' y='93.6595' width='197.741' height='48.6854' fill='#FFB23E' stroke='#FFB23E' />
            <path
              d='M0.5 170.258H198.241V230.664C198.241 232.194 197.001 233.435 195.471 233.435H3.27054C1.74041 233.435 0.5 232.194 0.5 230.664V170.258Z'
              fill='white'
              stroke='white'
            />
          </motion.svg>
        </div>
        <div className='right'>
          <div className='title'>{t("services-1-title")} </div>
          <div className='body'>{t("services-1-body")} </div>
          <div className='cta'>{t("services-1-cta")} </div>
        </div>
      </div>
    </StyledServices>
  )
}

export default Services
