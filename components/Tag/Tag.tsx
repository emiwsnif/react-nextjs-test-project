import styles from './Tag.module.css';
import { TagProps } from './Tag.props';
import cn from 'classnames';

export const Tag = ({ size = 'medium', color = 'ghost', href, children, className, ...props }: TagProps): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, className, {
				[styles.small]: size == 'small',
				[styles.medium]: size == 'medium',
				[styles.ghost]: color == 'ghost',
				[styles.red]: color == 'red',
				[styles.grey]: color == 'grey',
				[styles.green]: color == 'green',
				[styles.primary]: color == 'primary',
			})}
			{...props}
		>
			{
				href
					? <a href={href}>{children}</a>
					: <>{children}</>
			}
			{children}
		</div>
	);
};