import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Episode } from "../components/Episode";

const podcast1 = {
  num: "126",
  title: "Robot, který snědl koblihu",
  guest: "Radovan Siwek",
};

const episodes = [
  { num: 126, title: 'Robot, který snědl koblihu', guest: 'Radovan Siwek' },
  { num: 127, title: 'Hledání plyšového Yettiho', guest: 'Vojtěch Ryba' },
  { num: 128, title: 'Moderní hrachová polévka', guest: 'Kamila Štancová' },
  { num: 129, title: 'Poloautomatické zrcadlo', guest: 'Janka Janovská' },
  { num: 130, title: 'Máčené hlavy parlamentu', guest: 'Jonáš Daněk' },
  { num: 131, title: 'Služby na hraně přívěsu', guest: 'Tereza Křivánková' },
  { num: 132, title: 'Klasifikace sněžných klokanů', guest: 'Josef Stix' },
  { num: 133, title: 'Rybolov v Oceánu bouří', guest: 'Ludmila Gajová' },
];

document.querySelector("#root").innerHTML = render(
  <>
    <div className="episodes-list">
      <h2>Výpis pomocí komponenty</h2>
      <Episode
        num={podcast1.num}
        title={podcast1.title}
        guest={podcast1.guest}
      />

      <h2>Výpis pomocí map</h2>
     
      {episodes.map((episod) => ( 
        <Episode
          key={episod.num} 
          num={episod.num}
          title={episod.title}
          guest={episod.guest}
        />           
      ))}

    {/* Puvodni kod */}
      {/* <div className="episode">
        <div className="episode__num">127</div>
        <div className="episode__body">
          <div className="episode__title">Hledání plyšového Yettiho</div>
          <div className="episode__guest">host: Vojtěch Ryba</div>
        </div>
      </div>

      <div className="episode">
        <div className="episode__num">128</div>
        <div className="episode__body">
          <div className="episode__title">Moderní hrachová kaše</div>
          <div className="episode__guest">host: Kamila Štancová</div>
        </div>
      </div> */}
    </div>
  </>
);