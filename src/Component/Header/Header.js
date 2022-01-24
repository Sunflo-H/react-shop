import header from "./Header.module.css";

const Header = () =>{
  return(
      <div>
          <div>나는 헤더.js야</div>
          <div className={header.test}>슈바 나는 앱이다</div>
      </div>
  )
}
export default Header;