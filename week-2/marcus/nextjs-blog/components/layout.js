import styles from './layout.module.css';

export default function layout({children}) {
     console.log(styles);
    return <div className= {styles.container}>{children}</div>;

}