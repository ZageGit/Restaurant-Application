import styles from "../styles/Footer.module.css"
import Image from "next/image"
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" layout="fill" alt="" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH YES WE HAVE ZAGE PIZZA YUM YUM
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>TEMPELGASSE 7
                        <br />1020 VIENNA
                        <br />0660 783 65 71
                    </p>
                    <p className={styles.text}>TEMPELGASSE 7
                        <br />1020 VIENNA
                        <br />0660 783 65 71
                    </p>
                    <p className={styles.text}>TEMPELGASSE 7
                        <br />1020 VIENNA
                        <br />0660 783 65 71
                    </p>
                    <p className={styles.text}>TEMPELGASSE 7
                        <br />1020 VIENNA
                        <br />0660 783 65 71
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>MONDAY - FRIDAY
                        <br />09:00 - 22:00
                    </p>
                    <p className={styles.text}>SATURDAY - SUNDAY
                        <br />12:00 - 24:00
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer