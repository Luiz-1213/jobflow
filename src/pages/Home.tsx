import imgBanner from "/home_banner_team_work.svg";
// Estilos
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.main_container}>
      <div className={styles.main_content}>
        <h1 className={styles.title}>Sua Jornada Começa Aqui:</h1>
        <h2> Mostre ao Mundo Quem Você É!</h2>
        <p className={styles.sub_title}>
          Compartilhe suas habilidades e conquistas de forma simples e
          organizada. Estamos ansiosos para conhecer você!
        </p>
        <p>
          Ao final, você receberá um currículo em PDF, pronto para ser enviado
          para outras oportunidades de emprego. Aumente suas chances com um
          currículo bem estruturado e mostrando o seu melhor!
        </p>
        <a href="#advantagens">Ver mais vantagens</a>
        <p>
          <span>Não perca tempo! </span> Cada passo que você dá agora é um
          avanço em direção à sua próxima grande oportunidade.
        </p>
      </div>
      <div className={styles.banner}>
        <img src={imgBanner} alt="Imagem de trabalho em equipe" />
      </div>
      <button
        onClick={() => {
          navigate("/form");
        }}
      >
        Vamos começar?
      </button>
      <div id="advantagens" className={styles.advantages_section}>
        <p>
          Estamos entusiasmados em conhecê-lo(a) melhor e descobrir todo o
          potencial que você pode trazer para nossa equipe. Este formulário é
          uma oportunidade para você destacar suas habilidades, experiências e
          aspirações, para que possamos ajudá-lo(a) a alcançar seus objetivos
          profissionais.
        </p>
        <span>Por que preencher este formulário?</span>
        <ul>
          <li>
            ✔️ Porque acreditamos que cada detalhe importa na sua história.
          </li>
          <li>✔️ Porque valorizamos o que você tem a dizer.</li>
          <li>✔️ Porque este é o primeiro passo para algo incrível!</li>
        </ul>
        <p>
          Reserve alguns minutos para compartilhar suas conquistas conosco. Ao
          final, você poderá revisar tudo e gerar um PDF profissional com seus
          dados.
        </p>
        <span>Vamos começar? O mundo está esperando por você!</span>
      </div>
    </div>
  );
};

export default Home;
