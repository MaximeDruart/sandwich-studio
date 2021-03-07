import styled from "styled-components"
import { useTranslation } from "next-i18next"
import { motion } from "framer-motion"
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { gsap } from "gsap"

const StyledHero = styled.div`
  background: red;
  width: 100vw;
  height: 100vh;
  padding: 12vh max(5vw, 50px) 5vh max(5vw, 50px);

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  overflow: hidden;
  position: relative;

  * {
    font-family: NeueMontrealRegular;
    color: ${({ theme }) => theme.colors.text};
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
      ${({ theme }) => theme.textStyles.h4};
      width: 40%;
      text-align: right;
      &:first-letter {
        text-transform: capitalize;
      }
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
      &:first-letter {
        text-transform: capitalize;
      }
    }

    .contact-spinner {
      position: relative;
      width: 135px;
      height: 135px;
      .img {
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
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

    .right {
      margin-left: 30px;
      text-transform: lowercase;
    }
  }
`

const Hero = () => {
  const { t } = useTranslation("common")
  const possibleWords = useMemo(() => t("weAre", { returnObjects: true }).map((word) => word + "."))
  const activeWordRef = useRef(null)
  const caretRef = useRef(null)

  useLayoutEffect(() => {
    let globalTimeline = new gsap.timeline({
      paused: true,
      repeat: -1,
      defaults: { delay: 0.13 },
    })

    possibleWords.forEach((word) => {
      let tl = gsap.timeline({ defaults: { delay: 0.11 }, delay: 0.65 })
      word.split("").forEach((_, index) => {
        tl.set(activeWordRef.current, { innerText: word.slice(0, index + 1) })
      })
      tl.to(caretRef.current, { opacity: 0, duration: 0, delay: 0.2, repeatDelay: 0.7, repeat: 4, yoyo: true })
      word.split("").forEach((_, index) => {
        tl.set(activeWordRef.current, { innerText: word.slice(0, word.length - (index + 1)) })
      })
      globalTimeline.add(tl)
    })

    globalTimeline.play()

    return () => {
      globalTimeline.kill()
    }
  }, [])

  return (
    <StyledHero>
      <div className='top-line'>
        <p>{t("topLine")}</p>
      </div>
      <div className='we-are'>
        <span className='left'>We are</span>
        <span ref={activeWordRef} className='right'></span>
        <span ref={caretRef} className='caret'>
          |
        </span>
      </div>
      <div className='bottom-line'>
        <p>{t("bottomLine")}</p>
        <div className='contact-spinner'>
          <motion.img
            animate={{
              rotate: 360,
              transition: { ease: "linear", repeat: Infinity, duration: 12 },
            }}
            whileHover={{ scale: 1.15 }}
            className='img'
            src='/images/contact.png'
          />
        </div>
      </div>
    </StyledHero>
  )
}

export default Hero
