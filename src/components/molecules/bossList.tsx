import styled from "@emotion/styled";
import { ORDER_BOSS } from "@/constants/boss";
import MoveBossItem from "@/components/atoms/moveBossItem";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

type Props = {
  idx: number;
  setIdx: Dispatch<SetStateAction<number>>;
};

export default function BossList({ idx, setIdx }: Props) {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onscroll = (e: any) => {
      if (e.ctrlKey) return;
      e.preventDefault();
      if (e.type !== "mousewheel") return;
      e.currentTarget.scrollTo(0, e.currentTarget.scrollTop + (e.deltaY > 0 ? 33 : -33));
    };
    container.current?.addEventListener("scroll", onscroll, false);
    container.current?.addEventListener("mousewheel", onscroll, false);
    return () => {
      container.current?.removeEventListener("scroll", onscroll, false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      container.current?.removeEventListener("mousewheel", onscroll, false);
    };
  }, []);

  return (
    <Container ref={container}>
      <List>
        {ORDER_BOSS.map(i => (
          <MoveBossItem key={i} i={i} idx={idx} setIdx={setIdx} />
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  margin: 20px 4px 21px 2px;
  overflow: hidden auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin: 0;
  padding: 0;
  width: 100%;
`;
