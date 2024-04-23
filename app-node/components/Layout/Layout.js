import styles from './Layout.module.scss';
import className from 'classnames/bind';
import Head from "next/head";

let cx = className.bind(styles);

export default function Layout({ children, className }) {
    return (
        <>
            <Head className={cx(['component', className])}>
                <title>TS Discography</title>
            </Head>

            <main className={cx('main')}>{children}</main>
        </>
    );
}