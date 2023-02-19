import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import { Button, keyframes } from "@mui/material";
import styled from "@emotion/styled";

export default function Yuna() {
  const [start, setStart] = useState(false);
  const [idx, setIdx] = useState(1);

  const bgm = useRef<HTMLAudioElement>(null);

  const [big, setBig] = useState(false);
  const [t1, sett1] = useState("");

  const a2 = useRef<HTMLDivElement>(null);
  const [t2, sett2] = useState("");
  const [img2, setImg2] = useState(-1);
  const [img2src1, setImg2src1] = useState("");
  const [img2src2, setImg2src2] = useState("");
  const video1ref = useRef<HTMLVideoElement>(null);
  const [video1, setVideo1] = useState(false);
  const [video1src, setVideo1src] = useState("");

  const init = useCallback(() => {
    if (bgm.current) {
      bgm.current.pause();
      bgm.current.currentTime = 0;
    }
    if (video1ref.current) {
      video1ref.current.pause();
      video1ref.current.currentTime = 0;
    }
    setBig(false);
    sett1("");
    a2.current?.classList.remove("on");
    sett2("");
    setImg2(-1);
    setImg2src1("");
    setImg2src2("");
    setVideo1(false);
    setVideo1src("");
  }, []);

  useEffect(() => {
    init();
    setStart(false);
  }, [init]);

  const photoCard = useCallback(async (t: string[], img: string[], ms: number = 1500) => {
    await wait(1000);
    let i: number;
    t.length && print(sett2, t);
    for (i = 0; i < img.length; i++) {
      i % 2 === 0 ? setImg2src1(img[i]) : setImg2src2(img[i]);
      await wait(500);
      setImg2(i);
      await wait(ms - 500);
    }
    await setImg2(-1);
    await wait(500);
    sett2("");
    await wait(1000);
  }, []);
  const videoCard = useCallback(async (t: string[], video: string) => {
    a2.current?.classList.add("on");
    await wait(1000);
    setVideo1(true);
    setVideo1src(video);
    t.length && print(sett2, t);
    await wait(1000);
    await wait((video1ref.current?.duration ?? 0) * 1000 - 2000);
    setVideo1(false);
    await wait(1000);
  }, []);

  const ani1 = useCallback(async () => {
    setIdx(1);
    await wait(1000);
    let t: string[];
    t = [
      "ㅇ",
      "유",
      "유ㄴ",
      "유나",
      "유나ㅇ",
      "유나야",
      "유나야 ㅇ",
      "유나야 아",
      "유나야 안",
      "유나야 안ㄴ",
      "유나야 안녀",
      "유나야 안녕",
      "유나야 안녕",
    ];
    await print(sett1, t);
    await wait(1000);
    t = [
      "ㅇ",
      "이",
      "이ㄹ",
      "이러",
      "이런",
      "이런 ㄱ",
      "이런 거",
      "이런 건",
      "이런 건 ㅊ",
      "이런 건 처",
      "이런 건 처ㅇ",
      "이런 건 처으",
      "이런 건 처음",
      "이런 건 처음ㅇ",
      "이런 건 처음이",
      "이런 건 처음이ㅈ",
      "이런 건 처음이지",
      "이런 건 처음이지?",
      "이런 건 처음이지??",
      "이런 건 처음이지?? ㅋ",
      "이런 건 처음이지?? ㅋㅋ",
      "이런 건 처음이지?? ㅋㅋㅋ",
    ];
    await print(sett1, t);
    await wait(1000);
    t = [
      "ㅇ",
      "우",
      "우ㄹ",
      "우리",
      "우리ㄱ",
      "우리가",
      "우리가 ㅁ",
      "우리가 마",
      "우리가 만",
      "우리가 만ㄴ",
      "우리가 만나",
      "우리가 만난",
      "우리가 만난ㅈ",
      "우리가 만난지",
      "우리가 만난지\n",
      "우리가 만난지\nㅂ",
      "우리가 만난지\n버",
      "우리가 만난지\n벌",
      "우리가 만난지\n벌ㅆ",
      "우리가 만난지\n벌써",
      "우리가 만난지\n벌써 1",
      "우리가 만난지\n벌써 10",
      "우리가 만난지\n벌써 100",
      "우리가 만난지\n벌써 100ㅇ",
      "우리가 만난지\n벌써 100이",
      "우리가 만난지\n벌써 100일",
      "우리가 만난지\n벌써 100일ㅇ",
      "우리가 만난지\n벌써 100일이",
      "우리가 만난지\n벌써 100일이 ㄷ",
      "우리가 만난지\n벌써 100일이 도",
      "우리가 만난지\n벌써 100일이 돼",
      "우리가 만난지\n벌써 100일이 됐",
      "우리가 만난지\n벌써 100일이 됐ㅇ",
      "우리가 만난지\n벌써 100일이 됐어",
    ];
    await print(sett1, t);
    await wait(1000);
    t = [
      "ㅇ",
      "유",
      "유ㄴ",
      "유나",
      "유나ㅇ",
      "유나오",
      "유나와",
      "유나와ㅇ",
      "유나와으",
      "유나와의",
      "유나와의 ㅅ",
      "유나와의 소",
      "유나와의 소ㅈ",
      "유나와의 소주",
      "유나와의 소중",
      "유나와의 소중ㅎ",
      "유나와의 소중하",
      "유나와의 소중한",
      "유나와의 소중한 1",
      "유나와의 소중한 10",
      "유나와의 소중한 100",
      "유나와의 소중한 100ㅇ",
      "유나와의 소중한 100이",
      "유나와의 소중한 100일",
      "유나와의 소중한 100일ㅇ",
      "유나와의 소중한 100일이",
      "유나와의 소중한 100일인",
      "유나와의 소중한 100일인 ㅁ",
      "유나와의 소중한 100일인 마",
      "유나와의 소중한 100일인 만",
      "유나와의 소중한 100일인 만ㅋ",
      "유나와의 소중한 100일인 만크",
      "유나와의 소중한 100일인 만큼",
      "유나와의 소중한 100일인 만큼\nㄴ",
      "유나와의 소중한 100일인 만큼\n내",
      "유나와의 소중한 100일인 만큼\n내",
      "유나와의 소중한 100일인 만큼\n내ㄱ",
      "유나와의 소중한 100일인 만큼\n내가",
      "유나와의 소중한 100일인 만큼\n내가 ㄱ",
      "유나와의 소중한 100일인 만큼\n내가 가",
      "유나와의 소중한 100일인 만큼\n내가 가ㅈ",
      "유나와의 소중한 100일인 만큼\n내가 가자",
      "유나와의 소중한 100일인 만큼\n내가 가장",
      "유나와의 소중한 100일인 만큼\n내가 가장 ㅈ",
      "유나와의 소중한 100일인 만큼\n내가 가장 자",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 ㅎ",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 하",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 ㅅ",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 ㅇ",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 이",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있ㄴ",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있느",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 ㄱ",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 거",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 걸",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 걸ㄹ",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 걸로",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 걸로\nㅈ",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 걸로\n주",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 걸로\n준",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 걸로\n준ㅂ",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 걸로\n준비",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 걸로\n준비ㅎ",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 걸로\n준비해",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 걸로\n준비해ㅂ",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 걸로\n준비해보",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 걸로\n준비해봐",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 걸로\n준비해봤",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 걸로\n준비해봤ㅇ",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 걸로\n준비해봤어",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 걸로\n준비해봤어 ㅎ",
      "유나와의 소중한 100일인 만큼\n내가 가장 잘 할 수 있는 걸로\n준비해봤어 ㅎㅎ",
    ];
    await print(sett1, t);
    await wait(1000);
    t = [
      "ㄱ",
      "그",
      "글",
      "그러",
      "그럼",
      "그럼 ㅅ",
      "그럼 시",
      "그럼 시ㅈ",
      "그럼 시자",
      "그럼 시작",
      "그럼 시작ㅎ",
      "그럼 시작하",
      "그럼 시작할",
      "그럼 시작할ㄱ",
      "그럼 시작할게",
      "그럼 시작할게!",
      "그럼 시작할게!!",
    ];
    await print(sett1, t);
    await wait(1000);
  }, []);

  const ani2 = useCallback(async () => {
    setIdx(2);
    a2.current?.classList.add("on");
    let t: string[];
    let img: string[];
    t = [
      "2",
      "20",
      "202",
      "2022",
      "2022.",
      "2022.1",
      "2022.11",
      "2022.11.",
      "2022.11.1",
      "2022.11.12",
      "2022.11.12.",
      "2022.11.12.",
      "2022.11.12.",
      "2022.11.12. ㅇ",
      "2022.11.12. 여",
      "2022.11.12. 연",
      "2022.11.12. 연ㅇ",
      "2022.11.12. 연애",
      "2022.11.12. 연애 ",
      "2022.11.12. 연애 ㅅ",
      "2022.11.12. 연애 시",
      "2022.11.12. 연애 시ㅈ",
      "2022.11.12. 연애 시자",
      "2022.11.12. 연애 시작",
      "2022.11.12. 연애 시작",
      "2022.11.12. 연애 시작",
      "2022.11.12. 연애 시작 💕",
    ];
    img = [
      "/yuna/20221112/KakaoTalk_20230219_162640379.jpg",
      "/yuna/20221112/KakaoTalk_20230219_162640379_04.jpg",
      "/yuna/20221112/KakaoTalk_20230219_162640379_01.jpg",
      "/yuna/20221112/KakaoTalk_20230219_162640379_02.jpg",
      "/yuna/20221112/KakaoTalk_20230219_162640379_03.jpg",
    ];
    await photoCard(t, img);

    t = [
      "2",
      "20",
      "202",
      "2022",
      "2022.",
      "2022.1",
      "2022.11",
      "2022.11.",
      "2022.11.1",
      "2022.11.19",
      "2022.11.19.",
      "2022.11.19.",
      "2022.11.19.",
      "2022.11.19. ㄱ",
      "2022.11.19. 그",
      "2022.11.19. 급",
      "2022.11.19. 급ㅎ",
      "2022.11.19. 급하",
      "2022.11.19. 급하ㄱ",
      "2022.11.19. 급하게",
      "2022.11.19. 급하게 ",
      "2022.11.19. 급하게 ㅁ",
      "2022.11.19. 급하게 마",
      "2022.11.19. 급하게 만",
      "2022.11.19. 급하게 만ㄴ",
      "2022.11.19. 급하게 만나",
      "2022.11.19. 급하게 만난",
      "2022.11.19. 급하게 만난",
      "2022.11.19. 급하게 만난 ",
      "2022.11.19. 급하게 만난 ㅈ",
      "2022.11.19. 급하게 만난 주",
      "2022.11.19. 급하게 만난 주 ",
      "2022.11.19. 급하게 만난 주 ㅋ",
      "2022.11.19. 급하게 만난 주 ㅋㅋ",
    ];
    img = [
      "/yuna/20221119/KakaoTalk_20230219_163036307.jpg",
      "/yuna/20221119/KakaoTalk_20230219_163036307_01.jpg",
      "/yuna/20221119/KakaoTalk_20230219_163036307_02.jpg",
      "/yuna/20221119/KakaoTalk_20230219_163036307_03.webp",
    ];
    await photoCard(t, img);
    t = [
      "ㅇ",
      "어",
      "어ㅁ",
      "어무",
      "어묵",
      "어묵 ",
      "어묵 ㅁ",
      "어묵 머",
      "어묵 먹",
      "어묵 먹ㄴ",
      "어묵 먹느",
      "어묵 먹는",
      "어묵 먹는 ",
      "어묵 먹는 ㅇ",
      "어묵 먹는 유",
      "어묵 먹는 유ㄴ",
      "어묵 먹는 유나",
      "어묵 먹는 유나 ",
      "어묵 먹는 유나 ㄱ",
      "어묵 먹는 유나 구",
      "어묵 먹는 유나 귀",
      "어묵 먹는 유나 귀ㅇ",
      "어묵 먹는 유나 귀여",
      "어묵 먹는 유나 귀여ㅇ",
      "어묵 먹는 유나 귀여우",
      "어묵 먹는 유나 귀여워",
      "어묵 먹는 유나 귀여워 ",
      "어묵 먹는 유나 귀여워 ㅎ",
      "어묵 먹는 유나 귀여워 ㅎㅎ",
      "어묵 먹는 유나 귀여워 ㅎㅎ💕",
    ];
    await videoCard(t, "/yuna/20221119/KakaoTalk_20230219_163037655.mp4");

    t = [
      "2",
      "20",
      "202",
      "2022",
      "2022.",
      "2022.1",
      "2022.12",
      "2022.12.",
      "2022.12.0",
      "2022.12.03",
      "2022.12.03.",
      "2022.12.03.",
      "2022.12.03.",
      "2022.12.03. ㄷ",
      "2022.12.03. 대",
      "2022.12.03. 대ㄱ",
      "2022.12.03. 대구",
      "2022.12.03. 대구 ",
      "2022.12.03. 대구 ㅇ",
      "2022.12.03. 대구 이",
      "2022.12.03. 대구 이ㅇ",
      "2022.12.03. 대구 이우",
      "2022.12.03. 대구 이워",
      "2022.12.03. 대구 이월",
      "2022.12.03. 대구 이월ㄷ",
      "2022.12.03. 대구 이월드",
      "2022.12.03. 대구 이월드",
      "2022.12.03. 대구 이월드!\n",
      "2022.12.03. 대구 이월드!\nㄴ",
      "2022.12.03. 대구 이월드!\n너",
      "2022.12.03. 대구 이월드!\n너ㅁ",
      "2022.12.03. 대구 이월드!\n너무",
      "2022.12.03. 대구 이월드!\n너무 ",
      "2022.12.03. 대구 이월드!\n너무 ㅈ",
      "2022.12.03. 대구 이월드!\n너무 재",
      "2022.12.03. 대구 이월드!\n너무 재ㅁ",
      "2022.12.03. 대구 이월드!\n너무 재미",
      "2022.12.03. 대구 이월드!\n너무 재밌",
      "2022.12.03. 대구 이월드!\n너무 재밌ㅇ",
      "2022.12.03. 대구 이월드!\n너무 재밌어",
      "2022.12.03. 대구 이월드!\n너무 재밌었",
      "2022.12.03. 대구 이월드!\n너무 재밌었ㅇ",
      "2022.12.03. 대구 이월드!\n너무 재밌었어",
      "2022.12.03. 대구 이월드!\n너무 재밌었어 ",
      "2022.12.03. 대구 이월드!\n너무 재밌었어 ㅋ",
      "2022.12.03. 대구 이월드!\n너무 재밌었어 ㅋㅋ",
      "2022.12.03. 대구 이월드!\n너무 재밌었어 ㅋㅋㅋ",
    ];
    img = [
      "/yuna/20221203/KakaoTalk_20230219_163423299.jpg",
      "/yuna/20221203/KakaoTalk_20230219_163423299_01.jpg",
      "/yuna/20221203/KakaoTalk_20230219_163423299_02.jpg",
      "/yuna/20221203/KakaoTalk_20230219_163423299_03.jpg",
    ];
    await photoCard(t, img);
    t = [
      "ㅅ",
      "시",
      "신",
      "신ㄴ",
      "신나",
      "신나ㄱ",
      "신나게",
      "신나게 ",
      "신나게 ㅂ",
      "신나게 비",
      "신나게 비ㄴ",
      "신나게 비누",
      "신나게 비눗",
      "신나게 비눗ㅂ",
      "신나게 비눗바",
      "신나게 비눗방",
      "신나게 비눗방ㅇ",
      "신나게 비눗방우",
      "신나게 비눗방울",
      "신나게 비눗방울 ",
      "신나게 비눗방울 ㅂ",
      "신나게 비눗방울 부",
      "신나게 비눗방울 불",
      "신나게 비눗방울 불ㄱ",
      "신나게 비눗방울 불고",
      "신나게 비눗방울 불고 ",
      "신나게 비눗방울 불고 ㅇ",
      "신나게 비눗방울 불고 이",
      "신나게 비눗방울 불고 있",
      "신나게 비눗방울 불고 있ㄴ",
      "신나게 비눗방울 불고 있느",
      "신나게 비눗방울 불고 있는",
      "신나게 비눗방울 불고 있는 ",
      "신나게 비눗방울 불고 있는 ㄴ",
      "신나게 비눗방울 불고 있는 나",
      "신나게 비눗방울 불고 있는 나 ",
      "신나게 비눗방울 불고 있는 나 ㅋ",
      "신나게 비눗방울 불고 있는 나 ㅋㅋ",
      "신나게 비눗방울 불고 있는 나 ㅋㅋㅋ",
    ];
    await videoCard(t, "/yuna/20221203/KakaoTalk_20230219_163423858.mp4");
    t = [
      "ㄷ",
      "도",
      "동",
      "동ㅇ",
      "동여",
      "동영",
      "동영ㅅ",
      "동영사",
      "동영상",
      "동영상ㅇ",
      "동영상이",
      "동영상인",
      "동영상인 ",
      "동영상인 ㅈ",
      "동영상인 주",
      "동영상인 줄",
      "동영상인 줄ㄷ",
      "동영상인 줄도",
      "동영상인 줄도 ",
      "동영상인 줄도 ㅁ",
      "동영상인 줄도 모",
      "동영상인 줄도 모ㄹ",
      "동영상인 줄도 모르",
      "동영상인 줄도 모르ㄱ",
      "동영상인 줄도 모르고",
      "동영상인 줄도 모르고 ",
      "동영상인 줄도 모르고 ㄴ",
      "동영상인 줄도 모르고 노",
      "동영상인 줄도 모르고 놀",
      "동영상인 줄도 모르고 놀ㄱ",
      "동영상인 줄도 모르고 놀고",
      "동영상인 줄도 모르고 놀고 ",
      "동영상인 줄도 모르고 놀고 ㅇ",
      "동영상인 줄도 모르고 놀고 이",
      "동영상인 줄도 모르고 놀고 있",
      "동영상인 줄도 모르고 놀고 있ㄴ",
      "동영상인 줄도 모르고 놀고 있느",
      "동영상인 줄도 모르고 놀고 있는",
      "동영상인 줄도 모르고 놀고 있는 ",
      "동영상인 줄도 모르고 놀고 있는 ㅇ",
      "동영상인 줄도 모르고 놀고 있는 유",
      "동영상인 줄도 모르고 놀고 있는 유ㄴ",
      "동영상인 줄도 모르고 놀고 있는 유나",
      "동영상인 줄도 모르고 놀고 있는 유나💕",
    ];
    await videoCard(t, "/yuna/20221203/KakaoTalk_20230219_163440821.mp4");

    t = [
      "2",
      "20",
      "202",
      "2022",
      "2022.",
      "2022.1",
      "2022.12",
      "2022.12.",
      "2022.12.1",
      "2022.12.10",
      "2022.12.10.",
      "2022.12.10.",
      "2022.12.10.",
      "2022.12.10. ㄱ",
      "2022.12.10. 가",
      "2022.12.10. 가ㅍ",
      "2022.12.10. 가펴",
      "2022.12.10. 가평",
      "2022.12.10. 가평 ",
      "2022.12.10. 가평 ㅇ",
      "2022.12.10. 가평 여",
      "2022.12.10. 가평 여ㅎ",
      "2022.12.10. 가평 여해",
      "2022.12.10. 가평 여행",
      "2022.12.10. 가평 여행~",
      "2022.12.10. 가평 여행~\nㅃ",
      "2022.12.10. 가평 여행~\n쁘",
      "2022.12.10. 가평 여행~\n쁘ㄸ",
      "2022.12.10. 가평 여행~\n쁘띠",
      "2022.12.10. 가평 여행~\n쁘띠 ",
      "2022.12.10. 가평 여행~\n쁘띠 ㅍ",
      "2022.12.10. 가평 여행~\n쁘띠 프",
      "2022.12.10. 가평 여행~\n쁘띠 프ㄹ",
      "2022.12.10. 가평 여행~\n쁘띠 프라",
      "2022.12.10. 가평 여행~\n쁘띠 프랑",
      "2022.12.10. 가평 여행~\n쁘띠 프랑ㅅ",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스ㄷ",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 ",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 ㄱ",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가ㄱ",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고 ",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고 ㅂ",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고 부",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고 불",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고 불ㄷ",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고 불다",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고 불달",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고 불닭",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고 불닭ㅆ",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고 불닭싸",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고 불닭쌈",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고 불닭쌈ㄷ",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고 불닭쌈도",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고 불닭쌈도 ",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고 불닭쌈도 ㅁ",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고 불닭쌈도 머",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고 불닭쌈도 먹",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고 불닭쌈도 먹ㄱ",
      "2022.12.10. 가평 여행~\n쁘띠 프랑스도 가고 불닭쌈도 먹고",
    ];
    img = [
      "/yuna/20221210/KakaoTalk_20230219_165736260.jpg",
      "/yuna/20221210/KakaoTalk_20230219_165736260_01.jpg",
      "/yuna/20221210/KakaoTalk_20230219_165736260_02.jpg",
      "/yuna/20221210/KakaoTalk_20230219_165736260_05.jpg",
      "/yuna/20221210/KakaoTalk_20230219_165736260_03.jpg",
      "/yuna/20221210/KakaoTalk_20230219_165736260_04.jpg",
    ];
    await photoCard(t, img);

    t = [
      "2",
      "20",
      "202",
      "2022",
      "2022.",
      "2022.1",
      "2022.12",
      "2022.12.",
      "2022.12.2",
      "2022.12.24",
      "2022.12.24.",
      "2022.12.24.",
      "2022.12.24.",
      "2022.12.24. ㄱ",
      "2022.12.24. 겨",
      "2022.12.24. 경",
      "2022.12.24. 경ㅈ",
      "2022.12.24. 경주",
      "2022.12.24. 경주ㅇ",
      "2022.12.24. 경주에",
      "2022.12.24. 경주에ㅅ",
      "2022.12.24. 경주에서",
      "2022.12.24. 경주에서ㅇ",
      "2022.12.24. 경주에서으",
      "2022.12.24. 경주에서의",
      "2022.12.24. 경주에서의 ",
      "2022.12.24. 경주에서의 ㅋ",
      "2022.12.24. 경주에서의 크",
      "2022.12.24. 경주에서의 크ㄹ",
      "2022.12.24. 경주에서의 크리",
      "2022.12.24. 경주에서의 크리ㅅ",
      "2022.12.24. 경주에서의 크리스",
      "2022.12.24. 경주에서의 크리스ㅁ",
      "2022.12.24. 경주에서의 크리스마",
      "2022.12.24. 경주에서의 크리스마ㅅ",
      "2022.12.24. 경주에서의 크리스마스",
      "2022.12.24. 경주에서의 크리스마스\nㅈ",
      "2022.12.24. 경주에서의 크리스마스\n자",
      "2022.12.24. 경주에서의 크리스마스\n장",
      "2022.12.24. 경주에서의 크리스마스\n장ㅅ",
      "2022.12.24. 경주에서의 크리스마스\n장시",
      "2022.12.24. 경주에서의 크리스마스\n장식",
      "2022.12.24. 경주에서의 크리스마스\n장식ㅇ",
      "2022.12.24. 경주에서의 크리스마스\n장식이",
      "2022.12.24. 경주에서의 크리스마스\n장식이ㄹ",
      "2022.12.24. 경주에서의 크리스마스\n장식이라",
      "2022.12.24. 경주에서의 크리스마스\n장식이랑",
      "2022.12.24. 경주에서의 크리스마스\n장식이랑 ",
      "2022.12.24. 경주에서의 크리스마스\n장식이랑 ㅅ",
      "2022.12.24. 경주에서의 크리스마스\n장식이랑 서",
      "2022.12.24. 경주에서의 크리스마스\n장식이랑 선",
      "2022.12.24. 경주에서의 크리스마스\n장식이랑 선ㅁ",
      "2022.12.24. 경주에서의 크리스마스\n장식이랑 선무",
      "2022.12.24. 경주에서의 크리스마스\n장식이랑 선물",
      "2022.12.24. 경주에서의 크리스마스\n장식이랑 선물 ",
      "2022.12.24. 경주에서의 크리스마스\n장식이랑 선물 ㄱ",
      "2022.12.24. 경주에서의 크리스마스\n장식이랑 선물 고",
      "2022.12.24. 경주에서의 크리스마스\n장식이랑 선물 고ㅁ",
      "2022.12.24. 경주에서의 크리스마스\n장식이랑 선물 고마",
      "2022.12.24. 경주에서의 크리스마스\n장식이랑 선물 고마ㅇ",
      "2022.12.24. 경주에서의 크리스마스\n장식이랑 선물 고마우",
      "2022.12.24. 경주에서의 크리스마스\n장식이랑 선물 고마워",
      "2022.12.24. 경주에서의 크리스마스\n장식이랑 선물 고마워 ",
      "2022.12.24. 경주에서의 크리스마스\n장식이랑 선물 고마워 ㅎ",
      "2022.12.24. 경주에서의 크리스마스\n장식이랑 선물 고마워 ㅎㅎ",
    ];
    img = [
      "/yuna/20221224/KakaoTalk_20230219_165914342.jpg",
      "/yuna/20221224/KakaoTalk_20230219_165914342_02.jpg",
      "/yuna/20221224/KakaoTalk_20230219_165914342_01.jpg",
      "/yuna/20221224/KakaoTalk_20230219_170253902.jpg",
    ];
    await photoCard(t, img);

    t = [
      "2",
      "20",
      "202",
      "2023",
      "2023.",
      "2023.0",
      "2023.01",
      "2023.01.",
      "2023.01.0",
      "2023.01.07",
      "2023.01.07.",
      "2023.01.07.",
      "2023.01.07.",
      "2023.01.07. ㅂ",
      "2023.01.07. 바",
      "2023.01.07. 방",
      "2023.01.07. 방ㅌ",
      "2023.01.07. 방타",
      "2023.01.07. 방탈",
      "2023.01.07. 방탈ㅊ",
      "2023.01.07. 방탈추",
      "2023.01.07. 방탈출",
      "2023.01.07. 방탈출, ",
      "2023.01.07. 방탈출, ㅅ",
      "2023.01.07. 방탈출, 스",
      "2023.01.07. 방탈출, 스ㅍ",
      "2023.01.07. 방탈출, 스파",
      "2023.01.07. 방탈출, 스파ㄹ",
      "2023.01.07. 방탈출, 스파래",
      "2023.01.07. 방탈출, 스파랜",
      "2023.01.07. 방탈출, 스파랜ㄷ",
      "2023.01.07. 방탈출, 스파랜드",
    ];
    img = [
      "/yuna/20230107/KakaoTalk_20230219_205115108.jpg",
      "/yuna/20230107/KakaoTalk_20230219_205115108_01.jpg",
      "/yuna/20230107/KakaoTalk_20230219_205115108_02.jpg",
      "/yuna/20230107/KakaoTalk_20230219_165914342_03.jpg",
      "/yuna/20230107/KakaoTalk_20230219_165914342_04.jpg",
      "/yuna/20230107/KakaoTalk_20230219_205115108_03.jpg",
      "/yuna/20230107/KakaoTalk_20230219_205115108_04.jpg",
    ];
    await photoCard(t, img);

    t = [
      "2",
      "20",
      "202",
      "2023",
      "2023.",
      "2023.0",
      "2023.02",
      "2023.02.",
      "2023.02.1",
      "2023.02.11",
      "2023.02.11.",
      "2023.02.11.",
      "2023.02.11.",
      "2023.02.11. ㄹ",
      "2023.02.11. 로",
      "2023.02.11. 롤",
      "2023.02.11. 롤ㄹ",
      "2023.02.11. 롤러",
      "2023.02.11. 롤러 ㅌ",
      "2023.02.11. 롤러 타",
      "2023.02.11. 롤러 타ㄴ",
      "2023.02.11. 롤러 타느",
      "2023.02.11. 롤러 타는",
      "2023.02.11. 롤러 타는 ㅇ",
      "2023.02.11. 롤러 타는 유",
      "2023.02.11. 롤러 타는 유ㄴ",
      "2023.02.11. 롤러 타는 유나",
      "2023.02.11. 롤러 타는 유나 ㅋ",
      "2023.02.11. 롤러 타는 유나 ㅋㅋ",
      "2023.02.11. 롤러 타는 유나 ㅋㅋㅋ",
      "2023.02.11. 롤러 타는 유나 ㅋㅋㅋ\nㅈ",
      "2023.02.11. 롤러 타는 유나 ㅋㅋㅋ\n자",
      "2023.02.11. 롤러 타는 유나 ㅋㅋㅋ\n잘",
      "2023.02.11. 롤러 타는 유나 ㅋㅋㅋ\n잘 ㅌ",
      "2023.02.11. 롤러 타는 유나 ㅋㅋㅋ\n잘 타",
      "2023.02.11. 롤러 타는 유나 ㅋㅋㅋ\n잘 타ㄴ",
      "2023.02.11. 롤러 타는 유나 ㅋㅋㅋ\n잘 타네",
      "2023.02.11. 롤러 타는 유나 ㅋㅋㅋ\n잘 타네 ㅎ",
      "2023.02.11. 롤러 타는 유나 ㅋㅋㅋ\n잘 타네 ㅎㅎ",
    ];
    img = ["/yuna/20230211/KakaoTalk_20230219_164114117.jpg", "/yuna/20230211/KakaoTalk_20230219_164114117_01.jpg"];
    await photoCard(t, img);
    await videoCard([], "/yuna/20230211/KakaoTalk_20230219_164140374.mp4");
    t = [
      "2023.02.11.",
      "2023.02.11. ㅌ",
      "2023.02.11. 트",
      "2023.02.11. 트ㄹ",
      "2023.02.11. 트리",
      "2023.02.11. 트릭",
      "2023.02.11. 트릭 ㅇ",
      "2023.02.11. 트릭 아",
      "2023.02.11. 트릭 아ㅌ",
      "2023.02.11. 트릭 아트",
      "2023.02.11. 트릭 아트,",
      "2023.02.11. 트릭 아트, ㅇ",
      "2023.02.11. 트릭 아트, 이",
      "2023.02.11. 트릭 아트, 인",
      "2023.02.11. 트릭 아트, 인ㅅ",
      "2023.02.11. 트릭 아트, 인새",
      "2023.02.11. 트릭 아트, 인생",
      "2023.02.11. 트릭 아트, 인생ㄴ",
      "2023.02.11. 트릭 아트, 인생네",
      "2023.02.11. 트릭 아트, 인생네ㅋ",
      "2023.02.11. 트릭 아트, 인생네커",
      "2023.02.11. 트릭 아트, 인생네컷",
    ];
    img = [
      "/yuna/20230211/KakaoTalk_20230219_164114117_03.jpg",
      "/yuna/20230211/KakaoTalk_20230219_164114117_04.jpg",
      "/yuna/20230211/KakaoTalk_20230219_164114117_06.jpg",
      "/yuna/20230211/KakaoTalk_20230219_164114117_07.jpg",
      "/yuna/20230211/KakaoTalk_20230219_164114117_08.jpg",
      "/yuna/20230211/KakaoTalk_20230219_164114117_05.jpg",
    ];
    await photoCard(t, img);
    await videoCard([], "/yuna/20230211/KakaoTalk_20230219_164111834.mp4");

    a2.current?.classList.remove("on");
  }, [photoCard, videoCard]);

  const ani3 = useCallback(async () => {
    setIdx(1);
    let t: string[];
    t = [
      "1",
      "10",
      "100",
      "100ㅇ",
      "100이",
      "100일",
      "100일 ㄷ",
      "100일 도",
      "100일 동",
      "100일 동ㅇ",
      "100일 동아",
      "100일 동안",
      "100일 동안 ㅈ",
      "100일 동안 저",
      "100일 동안 정",
      "100일 동안 정ㅁ",
      "100일 동안 정마",
      "100일 동안 정말",
      "100일 동안 정말 ㅁ",
      "100일 동안 정말 마",
      "100일 동안 정말 만",
      "100일 동안 정말 많",
      "100일 동안 정말 많ㅇ",
      "100일 동안 정말 많으",
      "100일 동안 정말 많은",
      "100일 동안 정말 많은 ㄱ",
      "100일 동안 정말 많은 고",
      "100일 동안 정말 많은 곳",
      "100일 동안 정말 많은 곳ㅇ",
      "100일 동안 정말 많은 곳에",
      "100일 동안 정말 많은 곳에 ㄱ",
      "100일 동안 정말 많은 곳에 가",
      "100일 동안 정말 많은 곳에 갔",
      "100일 동안 정말 많은 곳에 갔ㄱ",
      "100일 동안 정말 많은 곳에 갔고",
      "100일 동안 정말 많은 곳에 갔고,",
      "100일 동안 정말 많은 곳에 갔고,\nㅈ",
      "100일 동안 정말 많은 곳에 갔고,\n재",
      "100일 동안 정말 많은 곳에 갔고,\n재ㅁ",
      "100일 동안 정말 많은 곳에 갔고,\n재미",
      "100일 동안 정말 많은 곳에 갔고,\n재밌",
      "100일 동안 정말 많은 곳에 갔고,\n재밌ㄴ",
      "100일 동안 정말 많은 곳에 갔고,\n재밌느",
      "100일 동안 정말 많은 곳에 갔고,\n재밌는",
      "100일 동안 정말 많은 곳에 갔고,\n재밌는 ㅇ",
      "100일 동안 정말 많은 곳에 갔고,\n재밌는 이",
      "100일 동안 정말 많은 곳에 갔고,\n재밌는 일",
      "100일 동안 정말 많은 곳에 갔고,\n재밌는 일ㅇ",
      "100일 동안 정말 많은 곳에 갔고,\n재밌는 일이",
      "100일 동안 정말 많은 곳에 갔고,\n재밌는 일이 ㅁ",
      "100일 동안 정말 많은 곳에 갔고,\n재밌는 일이 마",
      "100일 동안 정말 많은 곳에 갔고,\n재밌는 일이 만",
      "100일 동안 정말 많은 곳에 갔고,\n재밌는 일이 많",
      "100일 동안 정말 많은 곳에 갔고,\n재밌는 일이 많ㅇ",
      "100일 동안 정말 많은 곳에 갔고,\n재밌는 일이 많아",
      "100일 동안 정말 많은 곳에 갔고,\n재밌는 일이 많았",
      "100일 동안 정말 많은 곳에 갔고,\n재밌는 일이 많았ㄴ",
      "100일 동안 정말 많은 곳에 갔고,\n재밌는 일이 많았네",
      "100일 동안 정말 많은 곳에 갔고,\n재밌는 일이 많았네 ㅎ",
      "100일 동안 정말 많은 곳에 갔고,\n재밌는 일이 많았네 ㅎㅎ",
    ];
    await print(sett1, t);
    await wait(1000);
    t = [
      "ㅇ",
      "아",
      "앞",
      "앞ㅇ",
      "앞으",
      "앞으ㄹ",
      "앞으로",
      "앞으로ㄷ",
      "앞으로도",
      "앞으로도 ㅇ",
      "앞으로도 여",
      "앞으로도 여ㄱ",
      "앞으로도 여기",
      "앞으로도 여기 ㅈ",
      "앞으로도 여기 저",
      "앞으로도 여기 저ㄱ",
      "앞으로도 여기 저기",
      "앞으로도 여기 저기 ㅁ",
      "앞으로도 여기 저기 마",
      "앞으로도 여기 저기 만",
      "앞으로도 여기 저기 많",
      "앞으로도 여기 저기 많ㅇ",
      "앞으로도 여기 저기 많이",
      "앞으로도 여기 저기 많이 ㄴ",
      "앞으로도 여기 저기 많이 노",
      "앞으로도 여기 저기 많이 놀",
      "앞으로도 여기 저기 많이 놀ㄹ",
      "앞으로도 여기 저기 많이 놀러",
      "앞으로도 여기 저기 많이 놀러 ㄱ",
      "앞으로도 여기 저기 많이 놀러 가",
      "앞으로도 여기 저기 많이 놀러 가ㄱ",
      "앞으로도 여기 저기 많이 놀러 가고",
      "앞으로도 여기 저기 많이 놀러 가고\nㅁ",
      "앞으로도 여기 저기 많이 놀러 가고\n마",
      "앞으로도 여기 저기 많이 놀러 가고\n맛",
      "앞으로도 여기 저기 많이 놀러 가고\n맛ㅇ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛이",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있ㄴ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있느",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는ㄱ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 ㅁ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 마",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 만",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많ㅇ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 ㅁ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 머",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹ㅇ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으ㅁ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으며",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면ㅅ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\nㅈ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즈",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐ㄱ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐거",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁ㄱ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 ㅎ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 해",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 행",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 행ㅂ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 행보",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 행복",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 행복ㅎ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 행복하",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 행복하ㄱ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 행복하게",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 행복하게 ㅁ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 행복하게 마",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 행복하게 만",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 행복하게 만ㄴ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 행복하게 만나",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 행복하게 만나ㅈ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 행복하게 만나자",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 행복하게 만나자!",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 행복하게 만나자!!",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 행복하게 만나자!! ㅎ",
      "앞으로도 여기 저기 많이 놀러 가고\n맛있는거 많이 먹으면서\n즐겁고 행복하게 만나자!! ㅎㅎ",
    ];
    await print(sett1, t);
    await wait(1000);
    t = ["ㅅ", "사", "사ㄹ", "사라", "사랑", "사랑ㅎ", "사랑해", "사랑해 💕"];
    setBig(true);
    await print(sett1, t);
  }, []);

  const onClick = async () => {
    setStart(true);
    if (bgm.current) {
      bgm.current.volume = 0.2;
      bgm.current.play();
    }
    await ani1();
    await wait(1000);
    await ani2();
    await wait(1000);
    await ani3();
  };

  return (
    <Container>
      <audio ref={bgm} src={"/yuna/bgm.mp3"} loop />
      <div>
        <Button
          onClick={onClick}
          hidden={start}
          sx={{ display: start ? "none" : "block", color: "#000", fontFamily: '"bitbit", "NanumGothic", serif;', fontSize: "3rem" }}
        >
          💕 START ! 💕
        </Button>
        <Text hidden={!start} style={{ opacity: idx === 1 ? 1 : 0, fontSize: big ? "3rem" : "2rem" }}>
          {t1}
        </Text>
      </div>
      <Ani2 ref={a2}>
        <div style={{ position: "relative", width: "calc(80vw - 48px)", height: "calc(80vw - 48px)", borderRadius: 4, overflow: "hidden" }}>
          <Img src={img2src1} alt={""} style={{ opacity: img2 % 2 === 0 ? 1 : 0 }} />
          <Img src={img2src2} alt={""} style={{ opacity: img2 % 2 === 1 ? 1 : 0 }} />
          <Video
            ref={video1ref}
            src={video1src}
            controls={false}
            style={{ opacity: video1 ? 1 : 0 }}
            onLoadedMetadata={e => e.currentTarget.play()}
            onEnded={() => setVideo1src("")}
          />
        </div>
        <Text style={{ height: "6rem", textAlign: "left", fontSize: "1.5rem" }}>{t2}</Text>
      </Ani2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #ffb5c5 40%, #ffd400);
  font-family: "bitbit", "NanumGothic", serif;
`;

const cursor = keyframes`
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;
const Text = styled.p`
  position: relative;
  text-align: center;
  white-space: pre-line;
  color: #333;
  line-height: 2;
  //font-size: 2rem;
  transition: 1s opacity;

  ::after {
    content: "";
    display: inline-block;
    margin-left: 4px;
    width: 2px;
    height: 1em;
    background-color: #333;
    animation: ${cursor} 0.5s alternate infinite both;
    transform: translateY(2px);
  }
`;

const Ani2 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 100vh;
  padding: 24px;
  width: 80%;
  border-radius: 6px;
  background-color: #fff;
  transform: translate(-50%, -50%);
  transition: 1s opacity, 1s margin-top;

  &.on {
    margin-top: 0;
  }
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 1s opacity;
  object-fit: cover;
`;
const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 1s opacity;
  object-fit: cover;
`;

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const play = (src: string) => {
  const audio = document.createElement("audio");
  audio.addEventListener("pause", () => audio.remove());
  audio.src = src;
  audio.currentTime = 0.2;
  audio.play();
};

const print = async (set: Dispatch<SetStateAction<string>>, t: string[], ms: number = 100) => {
  for (let i = 0; i <= t.length - 1; i++) {
    if (t[i] !== t[i - 1]) {
      set(t[i]);
      play("/yuna/keyboard.mp3");
    }
    await wait(ms);
  }
};
const unprint = async (set: Dispatch<SetStateAction<string>>, t: string[], ms: number = 30) => {
  for (let i = t.length - 1; i >= -1; i--) {
    set(t[i]);
    await wait(ms);
  }
};
