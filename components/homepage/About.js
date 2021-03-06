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
`

const About = () => {
  return (
    <StyledAbout>
      <div className='headline'>What we stand for</div>
      <div className='our-mission'>
        <div className='photos'></div>
        <div className='text'>
          <div className='title'>Our mission</div>
          <div className='desc'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit atque vitae at deserunt consequatur nisi
            nesciunt, inventore nam reiciendis quo sequi totam est, accusantium hic expedita nobis velit dolorum ex?
          </div>
        </div>
      </div>
      <div className='who-we-are'>
        <div className='photos'></div>
        <div className='title'>Who we are</div>
        <div className='desc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit atque vitae at deserunt consequatur nisi
          nesciunt, inventore nam reiciendis quo sequi totam est, accusantium hic expedita nobis velit dolorum ex?
        </div>
      </div>
      <div className='text'></div>
    </StyledAbout>
  )
}

export default About
