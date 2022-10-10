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
            <p>Specialist Departments</p>
        </div>
        <div className={styles.alphabet_lists}>
            <div className={styles.alphabet_1column}>
                <div className={styles.alphabet_1column_09}>
                    <p>0-9</p>
                </div>
                <div className={styles.alphabet_1column_AC}>
                    <p>A-C</p>
                </div>
                <div className={styles.alphabet_1column_DF}>
                    <p>D-F</p>
                </div>
            </div>
            <div className={styles.alphabet_2column}>
                <div className={styles.alphabet_2column_GJ}>
                    <p>G-J</p>
                </div>
                <div className={styles.alphabet_2column_KN}>
                    <p>K-N</p>
                </div>
                <div className={styles.alphabet_2column_OR}>
                    <p>O-R</p>
                </div>
            </div>
            <div className={styles.alphabet_3column}>
                <div className={styles.alphabet_3column_ST}>
                    <p>S-T</p>
                </div>
                <div className={styles.alphabet_3column_UZ}>
                    <p>U-Z</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);
}

export default Alphabet;
