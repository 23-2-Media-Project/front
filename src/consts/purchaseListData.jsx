import img1 from "../assets/imgs/data/27.png";
import img2 from "../assets/imgs/data/40.png";
import img3 from "../assets/imgs/data/57.png";
import img4 from "../assets/imgs/data/61.png";

export const purchaseListData = [
  {
    date: "2023-11-14",
    orderNum: "20231114-0011866",
    lists: [
      {
        count: 1,
        name: "굿노트용 다이어리",
        real: "비실물",
        price: "8,000원",
        state: "배송완료",
        img: img1,
      },
      {
        count: 1,
        name: "아트워크 3D 로고",
        real: "비실물",
        price: "15,000원",
        state: "배송완료",
        img: img2,
      },
    ],
  },
  {
    date: "2023-10-29",
    orderNum: "20231029-123456",
    lists: [
      {
        count: 1,
        name: "웰컴 키트",
        real: "비실물",
        price: "30,000원",
        state: "배송완료",
        img: img3,
      },
      {
        count: 1,
        name: "콜라 캐릭터 인형",
        real: "실물",
        price: "20,000원",
        state: "배송완료",
        img: img4,
      },
    ],
  },
];
