import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/avatar_vo_tri_a49436c5de.jpg" alt="Avatar" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    User Name
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('description')}>User Description</p>
            </div>
        </div>
    );
}

export default AccountItem;