import styled from "styled-components";
import NoteCard from "../src/elements/NoteCard";
import Typography from "../src/elements/Typography";

const Container = styled.div`
  padding-top: 120px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .for-now {
    width: 100%;
    padding: 0 25%;
  }
  .slider-btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    margin-right: 40px;
    margin-top: 10px;
    .s-circle {
      border-radius: 25px;
      width: 6px;
      height: 6px;
      background-color: #ffffff;
      margin-bottom: 6px;
    }
    .active {
      height: 14px;
      background-color: #ffe494;
    }
  }
  .texts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: right;
    margin-right: 30px;
  }
`;
export default function Home() {
  return (
    <Container>
      <div className="for-now">
        <NoteCard backgroundColor="#FE7B72">
          <div className="slider-btns">
            <div className="s-circle active"></div>
            <div className="s-circle "></div>
            <div className="s-circle "></div>
          </div>
          <div className="texts">
            <Typography color="#ffffff" variant="h2" fontSize="22px">
              دسترسی به محصولات بی نظیر
            </Typography>
            <Typography color="#000000" variant="h2" fontSize="14px">
              به زودی قراره اینجا یه فروشگاه خفن، شروع به کار کنه :)
            </Typography>
          </div>
          <div className="cats-holder"></div>
        </NoteCard>
      </div>
    </Container>
  );
}
