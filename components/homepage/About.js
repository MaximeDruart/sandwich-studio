import styled from "styled-components"

const StyledAbout = styled.div`
  border: 1px solid yellow;
  width: 100vw;
  overflow: hidden;

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

  .about-section {
    display: flex;
    flex-flow: row nowrap;
    margin-top: 7vh;
    border: thin solid red;
    justify-content: space-between;

    .photos {
      width: 30%;
      border: thin solid white;
      position: relative;
      width: max(30vw, 400px);
      height: max(30vw, 400px);
      background: center / cover url("/images/mission-2.jpg");
      .photo {
        position: absolute;
        width: max(30vw, 400px);
        height: max(30vw, 400px);
        background: center / cover url("/images/mission.jpg");
        bottom: -30%;
        right: -30%;
      }
    }
    .text {
      width: max(40%, 400px);
      text-align: right;
      .title {
        /* white-space: nowrap; */
        ${({ theme }) => theme.textStyles.h2};
      }
      .desc {
        ${({ theme }) => theme.textStyles.text};
      }
    }
    &.who-we-are {
      flex-direction: row-reverse;

      .text {
        text-align: left;
      }
    }

    &.our-mission {
      .text {
        padding-top: 30vh;
      }
    }
  }
`

const About = () => {
  return (
    <StyledAbout>
      <div className='headline'>What we stand for</div>
      <div className='our-mission about-section'>
        <div className='photos'>
          <div className='photo'></div>
        </div>
        <div className='text'>
          <div className='title'>Our mission</div>
          <div className='desc'>
            Our speakers are experienced marketers willing to share and let you in on their little secrets that lead to
            big successes. We prepared an amazing line-up of digital marketers & brand experts from various industries.
          </div>
        </div>
      </div>
      <div className='who-we-are about-section'>
        <div className='photos'></div>
        <div className='text'>
          <div className='title'>Who we are</div>
          <div className='desc'>
            Our speakers are experienced marketers willing to share and let you in on their little secrets that lead to
            big successes. We prepared an amazing line-up of digital marketers & brand experts from various industries.
          </div>
        </div>
      </div>
    </StyledAbout>
  )
}

export default About
