import './header.scss';

export default function Header(){
    return(
        <header>
        <h1>BloodLink</h1>
        <nav>
          <a href="#find-blood">Find Blood</a>
          <a href="#register-donor">Register as Donor</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    )
}