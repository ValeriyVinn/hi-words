import css from './Colocations.module.css';

const Collocations = () => {
  return (
    <div className={css.article}>
      <h1>Collocations</h1>

      <div className={css.article}>
        <h2>Take</h2>
        <p>to click the button to start reading</p>
        <ul className={css.orderedList}>
         <li><button className={css.collocationButton}>Take action<span className={css.tooltiptext}>to do something to solve a problem</span></button></li>
         <li><button className={css.collocationButton}>Take a break<span className={css.tooltiptext}>to stop working for a short period of time</span></button></li>
         <li><button className={css.collocationButton}>Take care<span className={css.tooltiptext}>to be careful or look after someone/something</span></button></li>
         <li><button className={css.collocationButton}>Take responsibility<span className={css.tooltiptext}>to accept being in charge of something</span></button></li>
         <li><button className={css.collocationButton}>Take part<span className={css.tooltiptext}>to participate in something</span></button></li>
         <li><button className={css.collocationButton}>Take a chance<span className={css.tooltiptext}>to risk something</span></button></li>
         <li><button className={css.collocationButton}>Take a seat<span className={css.tooltiptext}>to sit down</span></button></li>
         <li><button className={css.collocationButton}>Take notes<span className={css.tooltiptext}>to write down important information</span></button></li>
         <li><button className={css.collocationButton}>Take a shower<span className={css.tooltiptext}>to clean yourself by washing</span></button></li>
         <li><button className={css.collocationButton}>Take a trip<span className={css.tooltiptext}>to go on a journey</span></button></li>
         <li><button className={css.collocationButton}>Take time<span className={css.tooltiptext}>to spend time on something</span></button></li>
         <li><button className={css.collocationButton}>Take into account<span className={css.tooltiptext}>to consider something</span></button></li>
         <li><button className={css.collocationButton}>Take a look<span className={css.tooltiptext}>to examine or check something</span></button></li>
         <li><button className={css.collocationButton}>Take advantage<span className={css.tooltiptext}>to make use of something for your benefit</span></button></li>
         <li><button className={css.collocationButton}>Take a turn<span className={css.tooltiptext}>to switch or alternate in doing something</span></button></li>
      </ul>
      </div>
      


    </div>
  );
};

export default Collocations;
