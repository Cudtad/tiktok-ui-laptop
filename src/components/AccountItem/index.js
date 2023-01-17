import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/318152840_1318738672278196_3631822027250799909_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=eYIUsSax850AX_O_QA0&tn=eJjB5nRsU9KqiKY5&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfB0xiKEvL_SEIfTdDV7IdGSLaeYLkDScgqRxUjDZOYkYw&oe=63CAA788"
                alt="Anh"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Pham Ngoc Anh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>ngocanh</span>
            </div>
        </div>
    );
}

export default AccountItem;
