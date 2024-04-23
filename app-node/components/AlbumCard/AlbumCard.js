import styles from './AlbumCard.module.scss';
import className from 'classnames/bind';
import Link from "next/link";

let cx = className.bind(styles);

export default function AlbumCard({ album, className }) {
    return (
        <Link href={`/albums/${album.slug}`} className={cx(['component', className])}>
            <img className={cx('album-card__cover')} src={album?.albumFields.cover?.node?.mediaItemUrl} />
        </Link>
    );
}