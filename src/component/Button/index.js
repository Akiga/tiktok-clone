import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onclick,
    children,
    primary = false,
    outline = false,
    rounded = false,
    text = false,
    disabled = false,
    small = false,
    large = false,
    lefticon,
    righticon,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onclick,
        ...passProps,
    };

    if (disabled) {
        delete props.onclick;
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('title')}>{children}</span>
            {righticon && <span className={cx('icon')}>{righticon}</span>}
        </Comp>
    );
}

export default Button;
