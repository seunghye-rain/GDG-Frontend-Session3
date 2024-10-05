import Image from "next/image";
import logo from "./logo.png";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-t from-black via-red-950 to-black w-full h-full font-custom">
      {/* 상단 로고와 로그인 버튼 */}
      <div className="flex flex-row justify-between items-center w-full p-8">
        <div className="flex">
          <Image src={logo} alt="Netflix Logo" className="w-[148px] h-[50px]" />
        </div>
        <div className="flex">
          <a
            role="button"
            className="w-auto h-auto p-2 bg-red-600 text-sm text-white font-custom rounded-sm"
          >
            로그인
          </a>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="p-32 text-center">
        <div>
          <h1 className="text-5xl font-extrabold leading-snug text-white">
            영화, 시리즈 등을 <br />
            무제한으로
          </h1>
          <p className="text-lg font-normal text-white mt-3 mb-6">
            5,500원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.
          </p>
        </div>

        {/* 이메일 입력 필드와 시작하기 버튼 */}
        <div className="flex flex-col items-center">
          <h3 className="text-md font-normal text-white mt-3 mb-6">
            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
            주소를 입력하세요.
          </h3>
          <div className="flex flex-row w-[508px] h-[50px] justify-center p-1">
            {/* 이메일 입력 필드 */}
            <input
              type="email"
              placeholder="이메일 주소"
              className="w-full p-4 bg-gray-600 bg-opacity-20 border-2 border-white text-sm text-white font-thin rounded-l-md focus:outline-none"
            />
            {/* 시작하기 버튼 */}
            <a
              role="button"
              className="p-4 bg-red-600 text-lg text-white font-medium rounded-r-md border-red-600"
            >
              시작하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
