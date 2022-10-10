import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// import { fetchCategory } from "../../features/categorySlice";
import styles from "./alphabet.module.css";

const Alphabet = () => {
  
  const category = useSelector((state) => state.category.category);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchCategory());
  }, [dispatch]);

  console.log(category)

  return (
    <div className={styles.alphabet_page}>
        <Header />
        <div className={styles.alphabet_title}>
            <h4>Specialist Departments</h4>
        </div>
        <div className={styles.alphabet_lists}>
            <div className={styles.alphabet_1column}>
                <div className={styles.alphabet_1column_09}>
                    <h5>0-9</h5>
                    <p>20th Century Sculpture</p>
                </div>
                <div className={styles.alphabet_1column_AC}>
                    <h5>A-C</h5>
                    <p>African & Oceanic Art</p>
                    <p>Antique Clocks & Timepieces</p>
                    <p>Antiquities</p>
                    <p>Arms & Armour</p>
                    <p>Asian Art</p>
                    <p>British & European Paintings</p>
                    <p>Coins, Medals & Banknotes</p>
                    <p>Contemporary & Post War Art</p>
                </div>
                <div className={styles.alphabet_1column_DF}>
                    <h5>D-F</h5>
                    <p>Design Since 1860</p>
                    <p>European Ceramics & Glass</p>
                    <p>Furniture</p>
                </div>
            </div>
            <div className={styles.alphabet_2column}>
                <div className={styles.alphabet_2column_GJ}>
                    <h5>G-J</h5>
                    <p>Islamic & Indian Art</p>
                    <p>Jacobite & Stuart Works of Art</p>
                    <p>Jewellery</p>
                </div>
                <div className={styles.alphabet_2column_KN}>
                    <h5>K-N</h5>
                    <p>Lalique</p>
                    <p>Marine Paintings</p>
                    <p>Modern British Art</p>
                    <p>Modern Design</p>
                </div>
                <div className={styles.alphabet_2column_OR}>
                    <h5>O-R</h5>
                    <p>Old Masters</p>
                    <p>Photography</p>
                    <p>Portraiture</p>
                    <p>Prints & Multiples</p>
                    <p>Rare Books, Manuscripts & Maps</p>
                    <p>Rugs & Carpets</p>
                </div>
            </div>
            <div className={styles.alphabet_3column}>
                <div className={styles.alphabet_3column_ST}>
                    <h5>S-T</h5>
                    <p>Scientific Instruments</p>
                    <p>Scottish Applied Arts</p>
                    <p>Scottish Paintings & Sculpture</p>
                    <p>Scottish Silver & Accessories</p>
                    <p>Silver & Objects of Vertu</p>
                    <p>Sporting Art</p>
                    <p>Studio & Contemporary Ceramics</p>
                    <p>Tapestries & Textiles</p>
                </div>
                <div className={styles.alphabet_3column_UZ}>
                    <h5>U-Z</h5>
                    <p>Vintage Posters</p>
                    <p>Watches</p>
                    <p>Whisky & Wine</p>
                    <p>Works of Art & Sculpture</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);
}

export default Alphabet;
